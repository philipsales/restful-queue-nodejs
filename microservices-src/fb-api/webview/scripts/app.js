var payButton = document.getElementById("pay-button");
var form = document.getElementById("payment-form");

Frames.init(checkout_public_key);

var logos = generateLogos();

function generateLogos() {
    var logos = {};
    logos["card-number"] = {
        src: "card",
        alt: "card number logo"
    };
    logos["expiry-date"] = {
        src: "exp-date",
        alt: "expiry date logo"
    };
    logos["cvv"] = {
        src: "cvv",
        alt: "cvv logo"
    };
    return logos;
};

var errors = {
    ["card-number"]: "Please enter a valid card number",
    ["expiry-date"]: "Please enter a valid expiry date",
    ["cvv"]: "Please enter a valid cvv code",
};
Frames.addEventHandler(
    Frames.Events.FRAME_VALIDATION_CHANGED,
    onValidationChanged
);

function onValidationChanged(event) {
    var e = event.element;

    if (event.isValid || event.isEmpty) {
        if (e == "card-number" && !event.isEmpty) {
            showPaymentMethodIcon();
        }
        setDefaultIcon(e);
        clearErrorIcon(e);
        clearErrorMessage(e);
    } else {
        if (e == "card-number") {
            clearPaymentMethodIcon();
        }
        setDefaultErrorIcon(e);
        setErrorIcon(e);
        setErrorMessage(e);
    }
}

function clearErrorMessage(el) {
    var selector = ".error-message__" + el;
    var message = document.querySelector(selector);
    message.textContent = "";
}

function clearErrorIcon(el) {
    var logo = document.getElementById("icon-" + el + "-error");
    logo.style.removeProperty("display");
}

function showPaymentMethodIcon(parent, pm) {
    if (parent) parent.classList.add("show");

    var logo = document.getElementById("logo-payment-method");
    if (pm) {
        var name = pm.toLowerCase();
        logo.setAttribute("src", "images/card-icons/" + name + ".svg");
        logo.setAttribute("alt", pm || "payment method");
    }
    logo.style.removeProperty("display");
}

function clearPaymentMethodIcon(parent) {
    if (parent) parent.classList.remove("show");

    var logo = document.getElementById("logo-payment-method");
    logo.style.setProperty("display", "none");
}

function setErrorMessage(el) {
    var selector = ".error-message__" + el;
    var message = document.querySelector(selector);
    message.textContent = errors[el];
}

function setDefaultIcon(el) {
    var selector = "icon-" + el;
    var logo = document.getElementById(selector);
    logo.setAttribute("src", "images/card-icons/" + logos[el].src + ".svg");
    logo.setAttribute("alt", logos[el].alt);
}

function setDefaultErrorIcon(el) {
    var selector = "icon-" + el;
    var logo = document.getElementById(selector);
    logo.setAttribute("src", "images/card-icons/" + logos[el].src + "-error.svg");
    logo.setAttribute("alt", logos[el].alt);
}

function setErrorIcon(el) {
    var logo = document.getElementById("icon-" + el + "-error");
    logo.style.setProperty("display", "block");
}

Frames.addEventHandler(
    Frames.Events.CARD_VALIDATION_CHANGED,
    cardValidationChanged
);

function cardValidationChanged(event) {
    payButton.disabled = !Frames.isCardValid();
}

Frames.addEventHandler(Frames.Events.CARD_TOKENIZED, onCardTokenized);

function onCardTokenized(event) {

    var el = document.querySelector(".success-payment-message");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.sandbox.checkout.com/payments", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', checkout_secret_key);
    console.log(JSON.stringify({
        "source": {
            "type": "token",
            "token": event.token
        },
        "amount": total_price.substring(3).replace(".", ""),
        "currency": "PHP",
        "reference": payment_id
    }));
    xhr.send(JSON.stringify({
        "source": {
            "type": "token",
            "token": event.token
        },
        "amount": total_price.substring(3).replace(".", ""),
        "currency": "PHP",
        "reference": payment_id
    }));
    xhr.onload = function() {
        var data = JSON.parse(this.responseText);
        if(data.status == "Authorized") {
            el.innerHTML = "Payment Complete!";
            var notify = new XMLHttpRequest();
            notify.open("POST", restUrl + "/notify_order", true);
            notify.setRequestHeader('Content-Type', 'application/json');
            notify.send(JSON.stringify({
                "messenger_id" : messenger_id,
                "blockName" : "Single Message Content",
                "messageContent" : "You successfully paid with the amount of\n" +
                                    total_price +
                                    " for items " +
                                    item_list.replace(/<br[/]>/g, "\n") +
                                    "\nThanks for your purchase!"
            }));
            ME.requestCloseBrowser(function() {
                console.log('Window will be closed');
            }, function(error) {
                console.log('There is an error');
                console.log(error);
            });
        } else {
            el.innerHTML = "Payment Error! Please try again";
            location.reload(); 
        }

    }
}


Frames.addEventHandler(
    Frames.Events.PAYMENT_METHOD_CHANGED,
    paymentMethodChanged
);

function paymentMethodChanged(event) {
    var pm = event.paymentMethod;
    let container = document.querySelector(".icon-container.payment-method");

    if (!pm) {
        clearPaymentMethodIcon(container);
    } else {
        clearErrorIcon("card-number");
        showPaymentMethodIcon(container, pm);
    }
}
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    var el = document.querySelector(".success-payment-message");
    el.innerHTML = "<img src='images/loading.gif'> Verifying payment...";
    event.preventDefault();
    Frames.submitCard();
}
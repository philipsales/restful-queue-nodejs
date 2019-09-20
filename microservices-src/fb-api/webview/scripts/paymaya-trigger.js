//http://www.prepbootstrap.com/bootstrap-template/credit-card-payment

$( "button.btn" ).click(function() {
    console.log("click")
    var el = document.querySelector(".success-payment-message");
    el.innerHTML = "<img src='images/loading.gif'> Verifying payment...";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/process-paymaya-payment", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    //xhr.setRequestHeader('Authorization', checkout_secret_key);
    xhr.send(JSON.stringify([{
        "card": {
        "number": document.getElementsByClassName("form-control")[0].value,
        "expMonth": document.getElementsByClassName("form-control")[1].value.substring(0,2),
        "expYear": document.getElementsByClassName("form-control")[1].value.substring(3),
        "cvc": document.getElementsByClassName("form-control")[2].value
        }
    }, {
            "paymentTokenId": "",
            "totalAmount": {
                "amount": parseInt(parseFloat(total_price.replace(/[a-zA-Z ]/g,""))*100).toString(),
                "currency": "PHP"
            },
            "buyer": {
                "firstName": document.getElementsByClassName("form-control")[3].value,
                "middleName": document.getElementsByClassName("form-control")[4].value,
                "lastName": document.getElementsByClassName("form-control")[5].value,
                "contact": {
                    "phone": document.getElementsByClassName("form-control")[6].value,
                    "email": document.getElementsByClassName("form-control")[7].value
            },
            "billingAddress": {
                "line1": document.getElementsByClassName("form-control")[8].value,
                "line2": document.getElementsByClassName("form-control")[9].value,
                "city": document.getElementsByClassName("form-control")[10].value,
                "state": document.getElementsByClassName("form-control")[11].value,
                "zipCode": document.getElementsByClassName("form-control")[12].value,
                "countryCode": document.getElementsByClassName("form-control")[13].value
            }
        },
        "requestReferenceNumber": "REF0001234",
        "redirectUrl": {
        "success": "http://shop.someserver.com/success?id=6319921",
        "failure": "http://shop.someserver.com/failure?id=6319921",
        "cancel": "http://shop.someserver.com/cancel?id=6319921"
        }
    }]));
    xhr.onload = function() {
        var data = JSON.parse(this.responseText);
        if(data.status == "FOR_AUTHENTICATION") {
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
});

function expirationInputCheck() {
    if(document.getElementsByClassName("form-control")[1].value.length == 2 && !isNaN(document.getElementsByClassName("form-control")[1].value))
        document.getElementsByClassName("form-control")[1].value += "/"
    if(document.getElementsByClassName("form-control")[1].value == "/")
        document.getElementsByClassName("form-control")[1].value = ""      

}

function isNumber(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}    
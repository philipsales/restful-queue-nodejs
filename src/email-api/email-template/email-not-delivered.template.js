const template = (recipient, messageContent, recipientName) => `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta content="text/html;charset=UTF-8" http-equiv="Content-Type"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no"><title>Newsletter_inspo-set_3</title><link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Sanchez:400,400i" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Viga" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">
        /* Resets */
        .ReadMsgBody { width: 100%; background-color: #ebebeb;}
        .ExternalClass {width: 100%; background-color: #ebebeb;}
        .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height:100%;}
        a[x-apple-data-detectors]{
            color:inherit !important;
            text-decoration:none !important;
            font-size:inherit !important;
            font-family:inherit !important;
            font-weight:inherit !important;
            line-height:inherit !important;
        }        
        body {-webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
        body {margin:0; padding:0;}
        .yshortcuts a {border-bottom: none !important;}
        .rnb-del-min-width{ min-width: 0 !important; }

        /* Add new outlook css start */
        .templateContainer{
            max-width:590px !important;
            width:auto !important;
        }
        /* Add new outlook css end */

        /* Image width by default for 3 columns */
        img[class="rnb-col-3-img"] {
        max-width:170px;
        }

        /* Image width by default for 2 columns */
        img[class="rnb-col-2-img"] {
        max-width:264px;
        }

        /* Image width by default for 2 columns aside small size */
        img[class="rnb-col-2-img-side-xs"] {
        max-width:180px;
        }

        /* Image width by default for 2 columns aside big size */
        img[class="rnb-col-2-img-side-xl"] {
        max-width:350px;
        }

        /* Image width by default for 1 column */
        img[class="rnb-col-1-img"] {
        max-width:550px;
        }

        /* Image width by default for header */
        img[class="rnb-header-img"] {
        max-width:590px;
        }

        /* Ckeditor line-height spacing */
        .rnb-force-col p, ul, ol{margin:0px!important;}
        .rnb-del-min-width p, ul, ol{margin:0px!important;}

        /* tmpl-2 preview */
        .rnb-tmpl-width{ width:100%!important;}

        /* tmpl-11 preview */
        .rnb-social-width{padding-right:15px!important;}

        /* tmpl-11 preview */
        .rnb-social-align{float:right!important;}

        @media only screen and (min-width:590px){
        /* mac fix width */
        .templateContainer{width:590px !important;}
        }

        @media screen and (max-width: 360px){
        /* yahoo app fix width "tmpl-2 tmpl-10 tmpl-13" in android devices */
        .rnb-yahoo-width{ width:360px !important;}
        }

        @media screen and (max-width: 380px){
        /* fix width and font size "tmpl-4 tmpl-6" in mobile preview */
        .element-img-text{ font-size:24px !important;}
        .element-img-text2{ width:230px !important;}
        .content-img-text-tmpl-6{ font-size:24px !important;}
        .content-img-text2-tmpl-6{ width:220px !important;}
        }

        @media screen and (max-width: 480px) {
        td[class="rnb-container-padding"] {
        padding-left: 10px !important;
        padding-right: 10px !important;
        }

        /* force container nav to (horizontal) blocks */
        td.rnb-force-nav {
        display: inherit;
        }
        }

        @media only screen and (max-width: 600px) {

        /* center the address &amp; social icons */
        .rnb-text-center {text-align:center !important;}

        /* force container columns to (horizontal) blocks */
        td.rnb-force-col {
        display: block;
        padding-right: 0 !important;
        padding-left: 0 !important;
        width:100%;
        }

        table.rnb-container {
         width: 100% !important;
        }

        table.rnb-btn-col-content {
        width: 100% !important;
        }
        table.rnb-col-3 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;

        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
        /*border-bottom: 1px solid #eee;*/
        }

        table.rnb-last-col-3 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        }

        table[class~="rnb-col-2"] {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;

        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
        /*border-bottom: 1px solid #eee;*/
        }

        table.rnb-col-2-noborder-onright {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;

        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
        }

        table.rnb-col-2-noborder-onleft {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;

        /* change left/right padding and margins to top/bottom ones */
        margin-top: 10px;
        padding-top: 10px;
        }

        table.rnb-last-col-2 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        }

        table.rnb-col-1 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        }

        img.rnb-col-3-img {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img.rnb-col-2-img {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img.rnb-col-2-img-side-xs {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img.rnb-col-2-img-side-xl {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img.rnb-col-1-img {
        /**max-width:none !important;**/
        width:100% !important;
        }

        img.rnb-header-img {
        /**max-width:none !important;**/
        width:100% !important;
        margin:0 auto;
        }

        img.rnb-logo-img {
        /**max-width:none !important;**/
        width:100% !important;
        }

        td.rnb-mbl-float-none {
        float:inherit !important;
        }

        .img-block-center{text-align:center !important;}

        .logo-img-center
        {
            float:inherit !important;
        }

        /* tmpl-11 preview */
        .rnb-social-align{margin:0 auto !important; float:inherit !important;}

        /* tmpl-11 preview */
        .rnb-social-center{display:inline-block;}

        /* tmpl-11 preview */
        .social-text-spacing{margin-bottom:0px !important; padding-bottom:0px !important;}

        /* tmpl-11 preview */
        .social-text-spacing2{padding-top:15px !important;}

    }@media screen{body{font-family:'Lato','Arial',Helvetica,sans-serif;}}@media screen{body{font-family:'Montserrat','Arial',Helvetica,sans-serif;}}@media screen{body{font-family:'Montserrat','Arial',Helvetica,sans-serif;}}@media screen{body{font-family:'Open Sans','Arial',Helvetica,sans-serif;}}@media screen{body{font-family:'Oswald','Arial',Helvetica,sans-serif;}}@media screen{body{font-family:'PT Mono','Arial',Helvetica,sans-serif;}}@media screen{body{font-family:'Sanchez','Arial',Helvetica,sans-serif;}}@media screen{body{font-family:'Viga','Arial',Helvetica,sans-serif;}}@media screen{body{font-family:'Quicksand','Arial',Helvetica,sans-serif;}}</style><!--[if gte mso 11]><style type="text/css">table{border-spacing: 0; }table td {border-collapse: separate;}</style><![endif]--><!--[if !mso]><!--><style type="text/css">table{border-spacing: 0;} table td {border-collapse: collapse;}</style><!--<![endif]--><!--[if gte mso 15]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><body>

<table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" class="main-template" bgcolor="#ebeded" style="background-color:#ebeded;"><tbody><tr style="display:none !important; font-size:1px; mso-hide: all;"><td></td><td></td></tr><tr><td align="center" valign="top">
        <!--[if gte mso 9]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="590" style="width:590px;">
                        <tr>
                        <td align="center" valign="top" width="590" style="width:590px;">
                        <![endif]-->
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="max-width:590px!important; width: 590px;"><tbody><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded" name="Layout_15" id="Layout_15"><tbody><tr><td class="rnb-del-min-width" valign="top" align="center" style="min-width: 590px; background-color: rgb(235, 237, 237);">
                        <table width="100%" cellpadding="0" border="0" align="center" cellspacing="0" style="background-color: rgb(235, 237, 237);"><tbody><tr><td height="10" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td align="center" height="20" style="font-family:Arial,Helvetica,sans-serif; color:#888888;font-size:13;font-weight:normal;text-align: center;">
                                    <span style="color: rgb(136, 136, 136); text-decoration: none;">
                                        <a target="_blank" href="" style="text-decoration: none; color: rgb(136, 136, 136);">View in browser</a></span>
                                </td>
                            </tr><tr><td height="10" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table></td>
                </tr></tbody></table></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>
                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded;" name="Layout_11" id="Layout_11"><tbody><tr><td class="rnb-del-min-width" align="center" valign="top" bgcolor="#ebeded" style="min-width:590px; background-color: #ebeded;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#cae1e3" style="background-color: rgb(202, 225, 227); border-radius: 0px; padding-left: 20px; padding-right: 20px; border-collapse: separate;"><tbody><tr><td height="40" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td valign="top" class="rnb-container-padding" bgcolor="#cae1e3" style="background-color: #cae1e3;" align="left">
                                    <table width="100%" cellpadding="0" border="0" align="center" cellspacing="0"><tbody><tr><td valign="top" align="center">
                                                <table cellpadding="0" border="0" align="center" cellspacing="0" class="logo-img-center"><tbody><tr><td valign="middle" align="center">
                                                            <div style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block; " cellspacing="0" cellpadding="0" border="0"><div><img width="300" vspace="0" hspace="0" border="0" alt="Sendinblue" style="float: left;max-width:300px;display:block;" class="rnb-logo-img" src="images/logo-placeholder.png"></div></div></td>
                                                    </tr></tbody></table></td>
                                        </tr></tbody></table></td>
                            </tr><tr><td height="0" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso]>
                </td>
                <![endif]--><!--[if mso]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>
                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px; background-color:#ebeded;" name="Layout_10" id="Layout_10"><tbody><tr><td class="rnb-del-min-width" valign="top" align="center" style="min-width: 590px;">
                        <table width="100%" class="rnb-container" cellpadding="0" border="0" bgcolor="#f8f8f8" align="center" cellspacing="0" style="background-color:#f8f8f8;"><tbody><tr><td valign="top" align="center">
                                    <table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td>
                                                <div style="display:block; border-radius:0px; width:590;;max-width:1200px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 0px;">
                                                    <div><img border="0" hspace="0" vspace="0" width="590" class="rnb-header-img" alt="" style="display:block; float:left; border-radius: 0px; " src="images/header.png"></div><div style="clear:both;"></div>
                                                    </div></td>
                                        </tr></tbody></table></td>
                            </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso]>
                </td>
                <![endif]--><!--[if mso]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>

                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            
            <table width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="background-color:#ebeded;" name="Layout_" id="Layout_"><tbody><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color: #ebeded;"><table border="0" width="100%" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#38c2d9" style="height: 0px; background-color: rgb(56, 194, 217); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;"><tbody><tr><td class="rnb-container-padding" bgcolor="#38c2d9" style="background-color: #38c2d9; font-size: px;font-family: ; color: ;">

                                    <table border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container" align="center" style="margin:auto;"><tbody><tr><td class="rnb-force-col" align="center">

                                                <table border="0" cellspacing="0" cellpadding="0" align="center" class="rnb-col-1"><tbody><tr><td height="10"></td>
                                                    </tr><tr><td style="font-family:'Viga','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                            <span style="color:#3c4858;"><span style="color:#FFFFFF;"><strong><span style="font-size:24px;">JULY CHECK-IN</span></strong></span></span>
                                                        </td>
                                                    </tr><tr><td height="10"></td>
                                                    </tr></tbody></table></td></tr></tbody></table></td>
                            </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso]>
                </td>
                <![endif]--><!--[if mso]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>
                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:100%; background-color:#ebeded;" name="Layout_5"><tbody><tr><td class="rnb-del-min-width" align="center" valign="top" bgcolor="#ebeded" style="background-color: #ebeded;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffffff" style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);"><tbody><tr><td height="30" style="font-size:1px; line-height:1px;"> </td>
                                        </tr><tr><td valign="top" class="rnb-container-padding" bgcolor="#ffffff" style="background-color: #ffffff;" align="left">

                                                <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container"><tbody><tr><td class="rnb-force-col" valign="top" style="padding-right: 0px;">

                                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%" align="left" class="rnb-col-1"><tbody><tr><td style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858; line-height: 21px;"><div><span style="color:#888888;">Hey ${recipient}!</span></div>

<div><span style="color:#888888;"> </span></div>

<div><span style="color:#888888;">Time for your monthly swim workout update from your favorite online swim coach!</span></div>

<div><span style="color:#888888;"> </span></div>

<div><span style="color:#888888;">The focus for this month will be on building strength in your legs. This will help you take full advantage of your walls and it will also come in handy when you're pushing through the last few meters of your favorite race -- or maybe you just need a little more leg stamina to keep you going on those long nights out!</span></div>

<div><span style="color:#888888;"> </span></div>

<div><span style="color:#888888;">Remember, as you work on kicking this month, be sure to take at least three kicks off each wall and don't breathe in and out of your turns. The more you practice this, the more natural it becomes in your training. </span></div>

<div><span style="color:#888888;"> </span></div>

<div><span style="color:#888888;">Good luck with this month's workouts!</span></div>

<div><span style="color:#888888;"> </span></div>

<div><span style="color:#888888;"><em>Your Personal Swim Coach</em></span><span style="color:#435058;"><em> 🏊</em></span></div>
</td>
                                                                </tr></tbody></table></td></tr></tbody></table></td>
                                        </tr><tr><td height="30" style="font-size:1px; line-height:1px;border-bottom:0px;"> </td>
                                        </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso]>
                </td>
                <![endif]--><!--[if mso]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px; background-color:#ebeded;" name="Layout_7819" id="Layout_7819"><tbody><tr><td class="rnb-del-min-width" valign="top" align="center" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded;">
                        <table width="100%" cellpadding="0" border="0" height="30" cellspacing="0" bgcolor="#ebeded" style="background-color:#ebeded;"><tbody><tr><td valign="top" height="30">
                                    <img width="20" height="30" style="display:block; max-height:30px; max-width:20px;" alt="" src="http://p4x9.r.bh.d.sendibt3.com/2myoa59e62ve.gif"></td>
                            </tr></tbody></table></td>
                </tr></tbody></table></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>
                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:100%; background-color:#ebeded;" name="Layout_6" id="Layout_6"><tbody><tr><td class="rnb-del-min-width" align="center" valign="top" bgcolor="#ebeded" style="background-color: #ebeded;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#38c2d9" style="max-width: 100%; min-width: 100%; table-layout: fixed; background-color: rgb(56, 194, 217); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;"><tbody><tr><td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td valign="top" class="rnb-container-padding" bgcolor="#38c2d9" style="background-color: #38c2d9;" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container"><tbody><tr><td class="rnb-force-col" width="550" valign="top" style="padding-right: 0px;">
                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left" class="rnb-col-1" width="550"><tbody><tr><td width="100%" class="img-block-center" valign="top" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td width="100%" valign="top" align="left" class="img-block-center">
                                                                        <table style="display: inline-block;" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td>
                                                                                    <div style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;"><div><img border="0" width="550" hspace="0" vspace="0" alt="" class="rnb-col-1-img" src="images/image-placeholder-wide.png" style="vertical-align: top; max-width: 1000px; float: left;"></div><div style="clear:both;"></div>
                                                                                    </div>
                                                                            </td>
                                                                            </tr></tbody></table></td>
                                                                </tr></tbody></table></td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td style="font-size:24px; font-family:'Viga','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">
                                                            <span style="color:#3c4858; "><span style="font-size:24px;"><span style="color:#FFFFFF;"><strong>MONTHLY WORKOUT: JULY</strong></span></span></span></td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858; line-height: 21px;">
                                                            <div><div style="line-height: 24px; text-align: center;"><span style="font-size:14px;"><span style="color:#FFFFFF;">Download this month's workout eBook containing 18 different workouts to keep you in tip-top shape and working hard until next month.</span></span></div>
</div>
                                                        </td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td valign="top">
                                                            <table cellpadding="0" border="0" align="center" cellspacing="0" class="rnb-btn-col-content" style="border-collapse: separate;margin:0 auto;"><tbody><tr><td width="auto" valign="middle" bgcolor="#26557d" align="center" height="40" style="font-size:14px; font-family:Arial,Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:18px; padding-right:18px; background-color:#26557d; border-radius:4px;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <a style="text-decoration:none; color:#ffffff; font-weight:normal;" target="_blank">Download the Workouts »</a>
                                                                        </span>
                                                                    </td>
                                                                </tr></tbody></table></td>
                                                    </tr></tbody></table></td></tr></tbody></table></td>
                            </tr><tr><td height="30" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso]>
                </td>
                <![endif]--><!--[if mso]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px; background-color:#ebeded;" name="Layout_14" id="Layout_14"><tbody><tr><td class="rnb-del-min-width" valign="top" align="center" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded;">
                        <table width="100%" cellpadding="0" border="0" height="30" cellspacing="0" bgcolor="#ebeded" style="background-color:#ebeded;"><tbody><tr><td valign="top" height="30">
                                    <img width="20" height="30" style="display:block; max-height:30px; max-width:20px;" alt="" src="http://p4x9.r.bh.d.sendibt3.com/2myoa59e62ve.gif"></td>
                            </tr></tbody></table></td>
                </tr></tbody></table></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>

                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            
            <table width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="background-color:#ebeded;" name="Layout_7" id="Layout_7"><tbody><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color: #ebeded;"><table border="0" width="100%" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffffff" style="height: 0px; background-color: rgb(255, 255, 255); border-radius: 0px; border-collapse: separate; padding-top: 20px; padding-left: 20px; padding-right: 20px;"><tbody><tr><td class="rnb-container-padding" bgcolor="#ffffff" style="background-color: #ffffff; font-size: px;font-family: ; color: ;">

                                    <table border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container" align="center" style="margin:auto;"><tbody><tr><td class="rnb-force-col" align="center">

                                                <table border="0" cellspacing="0" cellpadding="0" align="center" class="rnb-col-1"><tbody><tr><td height="10"></td>
                                                    </tr><tr><td style="font-family:'Viga','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                            <span style="color:#3c4858;"><span style="font-size:24px;"><span style="color:#26557d;"><b>HELPFUL VIDEOS</b></span></span></span>
                                                        </td>
                                                    </tr><tr><td height="10"></td>
                                                    </tr></tbody></table></td></tr></tbody></table></td>
                            </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso]>
                </td>
                <![endif]--><!--[if mso]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>
                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:100%; background-color:#ebeded;" name="Layout_" id="Layout_"><tbody><tr><td class="rnb-del-min-width" align="center" valign="top" bgcolor="#ebeded" style="background-color: #ebeded;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#ffffff" style="max-width: 100%; min-width: 100%; table-layout: fixed; background-color: rgb(255, 255, 255); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;"><tbody><tr><td height="0" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td valign="top" class="rnb-container-padding" bgcolor="#ffffff" style="background-color: #ffffff;" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container"><tbody><tr><td class="rnb-force-col" width="265" valign="top" style="padding-right: 20px;">
                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left" class="rnb-col-2" width="265"><tbody><tr><td width="100%" class="img-block-center" valign="top" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td width="100%" valign="top" align="left" class="img-block-center">
                                                                        <table style="display: inline-block;" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td>
                                                                                    <div style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;"><div><img border="0" width="265" hspace="0" vspace="0" alt="" class="rnb-col-2-img" src="images/image-placeholder-square.png" style="vertical-align: top; max-width: 1000px; float: left;"></div><div style="clear:both;"></div>
                                                                                    </div>
                                                                            </td>
                                                                            </tr></tbody></table></td>
                                                                </tr></tbody></table></td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td style="font-size:24px; font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center;">
                                                            <span style="color:#3c4858; "><span style="font-size:16px;"><strong>Advanced Breaststroke Technique with Brendan Hansen</strong></span></span></td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858; line-height: 21px;">
                                                            <div><div style="text-align: center;"><span style="color:#888888;">Lorem ipsum dolor </span><a href="#" style="text-decoration: underline; color: rgb(56, 194, 217);"><span style="color:#888888;">sit amet,consectetur adipisicing</span></a><span style="color:#888888;"> elit, sed do incididunt utlabore etdolore magna aliqua. Ut enim minim.</span></div>
</div>
                                                        </td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td valign="top">
                                                            <table cellpadding="0" border="0" align="center" cellspacing="0" class="rnb-btn-col-content" style="border-collapse: separate;margin:0 auto;"><tbody><tr><td width="auto" valign="middle" bgcolor="#38c2d9" align="center" height="40" style="font-size:14px; font-family:Arial,Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:18px; padding-right:18px; background-color:#38c2d9; border-radius:4px;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <a style="text-decoration:none; color:#ffffff; font-weight:normal;" target="_blank">Watch the Video »</a>
                                                                        </span>
                                                                    </td>
                                                                </tr></tbody></table></td>
                                                    </tr></tbody></table></td><td class="rnb-force-col" width="265" valign="top" style="padding-right: 0px;">
                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left" class="rnb-last-col-2" width="265"><tbody><tr><td width="100%" class="img-block-center" valign="top" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td width="100%" valign="top" align="left" class="img-block-center">
                                                                        <table style="display: inline-block;" cellspacing="0" cellpadding="0" border="0"><tbody><tr><td>
                                                                                    <div style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;"><div><img border="0" width="265" hspace="0" vspace="0" alt="" class="rnb-col-2-img" src="images/image-placeholder-square.png" style="vertical-align: top; max-width: 1140px; float: left;"></div><div style="clear:both;"></div>
                                                                                    </div>
                                                                            </td>
                                                                            </tr></tbody></table></td>
                                                                </tr></tbody></table></td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td style="font-size:24px; font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:center;">
                                                            <span style="color:#3c4858; "><span style="font-size:16px;"><strong>Mastering the Track Start for Swimming</strong></span></span></td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td style="font-size:14px; font-family:Arial,Helvetica,sans-serif, sans-serif; color:#3c4858; line-height: 21px;">
                                                            <div><div style="text-align: center;"><span style="color:#888888;">Lorem ipsum dolor </span><a href="#" style="text-decoration: underline; color: rgb(56, 194, 217);"><span style="color:#888888;">sit amet,consectetur adipisicing</span></a><span style="color:#888888;"> elit, sed do incididunt utlabore etdolore magna aliqua. Ut enim minim.</span></div>
</div>
                                                        </td>
                                                    </tr><tr><td height="10" class="col_td_gap" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td valign="top">
                                                            <table cellpadding="0" border="0" align="center" cellspacing="0" class="rnb-btn-col-content" style="border-collapse: separate;margin:0 auto;"><tbody><tr><td width="auto" valign="middle" bgcolor="#38c2d9" align="center" height="40" style="font-size:14px; font-family:Arial,Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:18px; padding-right:18px; background-color:#38c2d9; border-radius:4px;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <a style="text-decoration:none; color:#ffffff; font-weight:normal;" target="_blank">Watch the Video »</a>
                                                                        </span>
                                                                    </td>
                                                                </tr></tbody></table></td>
                                                    </tr></tbody></table></td></tr></tbody></table></td>
                            </tr><tr><td height="30" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso]>
                </td>
                <![endif]--><!--[if mso]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px; background-color:#ebeded;" name="Layout_12" id="Layout_12"><tbody><tr><td class="rnb-del-min-width" valign="top" align="center" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded;">
                        <table width="100%" cellpadding="0" border="0" height="30" cellspacing="0" bgcolor="#ebeded" style="background-color:#ebeded;"><tbody><tr><td valign="top" height="30">
                                    <img width="20" height="30" style="display:block; max-height:30px; max-width:20px;" alt="" src="http://p4x9.r.bh.d.sendibt3.com/2myoa59e62ve.gif"></td>
                            </tr></tbody></table></td>
                </tr></tbody></table></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>

                <!--[if mso]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            
            <table width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="background-color:#ebeded;" name="Layout_9" id="Layout_9"><tbody><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color: #ebeded;"><table border="0" width="100%" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#26557d" style="height: 0px; background-color: rgb(38, 85, 125); border-radius: 0px; border-collapse: separate; padding-top: 20px; padding-left: 20px; padding-right: 20px;"><tbody><tr><td class="rnb-container-padding" bgcolor="#26557d" style="background-color: #26557d; font-size: px;font-family: ; color: ;">

                                    <table border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container" align="center" style="margin:auto;"><tbody><tr><td class="rnb-force-col" align="center">

                                                <table border="0" cellspacing="0" cellpadding="0" align="center" class="rnb-col-1"><tbody><tr><td height="10"></td>
                                                    </tr><tr><td style="font-family:'Viga','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                            <span style="color:#3c4858;"><span style="font-size:22px;"><span style="color:#FFFFFF;"><strong>PSC SWIMMER OF THE MONTH</strong></span></span></span>
                                                        </td>
                                                    </tr><tr><td height="10"></td>
                                                    </tr></tbody></table></td></tr></tbody></table></td>
                            </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso]>
                </td>
                <![endif]--><!--[if mso]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <div>
                <!--[if mso 15]>
                <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
                <tr>
                <![endif]-->
                
                <!--[if mso 15]>
                <td valign="top" width="590" style="width:590px;">
                <![endif]-->
            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:100%; background-color:#ebeded;" name="Layout_8" id="Layout_8"><tbody><tr><td class="rnb-del-min-width" align="center" valign="top" bgcolor="#ebeded" style="background-color: #ebeded;">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container" bgcolor="#26547C" style="max-width: 100%; min-width: 100%; table-layout: fixed; background-color: rgb(38, 84, 124); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;"><tbody><tr><td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td valign="top" class="rnb-container-padding" bgcolor="#26547C" style="background-color: #26547C;" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container"><tbody><tr><td class="rnb-force-col" valign="top">

                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" width="350" align="left" class="rnb-last-col-2"><tbody><tr><td style="font-size:24px; font-family:Arial,Helvetica,sans-serif; color:#3c4858; text-align:left;">
                                                            <span style="color:#3c4858; "><span style="color:#FFFFFF;"><strong><span style="font-size:18px;">John Anderson, 34, Milwaukee, WI</span></strong></span></span></td>
                                                    </tr><tr><td height="20" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td class="rnb-mbl-float-none" style="font-size:14px; font-family:Arial,Helvetica,sans-serif;color:#3c4858;float:left;width:350px; line-height: 21px;"><div><span style="color:#FFFFFF;">John started following the PSC monthly workout plan one year ago this month, and he has successfully lost 65 lbs. with the program. Learn more about John's fitness journey in this month's featured swimmer story.</span></div>
</td>
                                                    </tr><tr><td height="20" style="font-size:1px; line-height:1px;"> </td>
                                                    </tr><tr><td valign="top">
                                                            <table cellpadding="0" border="0" align="left" cellspacing="0" class="rnb-btn-col-content" style=""><tbody><tr><td width="auto" valign="middle" bgcolor="#38c2d9" align="center" height="40" style="font-size:14px; font-family:Arial,Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:14px; padding-right:14px; background-color:#38c2d9; border-radius:4px;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                        <a style="text-decoration:none; color:#ffffff; font-weight:normal;" target="_blank">Read More »</a>
                                                                        
                                                                       </span>
                                                                    </td>
                                                                </tr></tbody></table></td>

                                                    </tr></tbody></table></td>

                                            <td class="msib-right-img rnb-force-col img-block-center" width="180" valign="top" style="padding-left: 20px;">

                                                <table width="100%" border="0" valign="top" cellspacing="0" cellpadding="0" align="left" class="rnb-col-2-noborder-onleft"><tbody><tr><td width="100%" class="img-block-center" valign="top" align="left">
                                                            <div style="border-top:0px none #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;"><div><img alt="" border="0" hspace="0" vspace="0" width="180" style="vertical-align:top; float: left; max-width:800px !important; " class="rnb-col-2-img-side-xl" src="images/image-placeholder.png"></div><div style="clear:both;"></div>
                                                                </div></td>
                                                    </tr></tbody></table></td></tr></tbody></table></td>
                            </tr><tr><td height="30" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table></td>
                </tr></tbody></table><!--[if mso 15]>
                </td>
                <![endif]--><!--[if mso 15]>
                </tr>
                </table>
                <![endif]--></div></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0" style="min-width:590px; background-color:#ebeded;" name="Layout_13" id="Layout_13"><tbody><tr><td class="rnb-del-min-width" valign="top" align="center" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded;">
                        <table width="100%" cellpadding="0" border="0" height="30" cellspacing="0" bgcolor="#ebeded" style="background-color:#ebeded;"><tbody><tr><td valign="top" height="30">
                                    <img width="20" height="30" style="display:block; max-height:30px; max-width:20px;" alt="" src="http://p4x9.r.bh.d.sendibt3.com/2myoa59e62ve.gif"></td>
                            </tr></tbody></table></td>
                </tr></tbody></table></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded;" name="Layout_" id="Layout_"><tbody><tr><td class="rnb-del-min-width" align="center" valign="top" bgcolor="38c2d9" style="min-width:590px; background-color: 38c2d9;">
                        <table width="590" class="rnb-container" cellpadding="0" border="0" align="center" cellspacing="0"><tbody><tr><td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td valign="top" class="rnb-container-padding" style="font-size: 14px; font-family: Arial,Helvetica,sans-serif; color: #888888;" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container"><tbody><tr><td class="rnb-force-col" style="padding-right:20px; padding-left:20px; mso-padding-alt: 0 0 0 20px;" valign="top">

                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" width="264" align="left" class="rnb-col-2" style="border-bottom:0;"><tbody><tr><td valign="top">
                                                            <table cellpadding="0" border="0" align="left" cellspacing="0" class="rnb-btn-col-content"><tbody><tr><td valign="middle" align="left" style="font-size:14px; font-family:Arial,Helvetica,sans-serif; color:#888888;" class="rnb-text-center">
                                                                        <div><div style="line-height:24px;"><span style="color:#FFFFFF;">Your Company<br>
9, Rue Bleue<br>
75009 PARIS</span><br><a href="#" style="text-decoration: underline; color: rgb(255, 255, 255);"><span style="color:#FFFFFF;">contact@company.com</span></a></div>
</div>
                                                                    </td></tr></tbody></table></td>
                                                    </tr></tbody></table></td><td ng-if="item.text.align=='left'" class="rnb-force-col rnb-social-width" valign="top" style="mso-padding-alt: 0 20px 0 0; padding-right: 15px;">

                                                <table border="0" valign="top" cellspacing="0" cellpadding="0" width="246" align="right" class="rnb-last-col-2"><tbody><tr><td valign="top">
                                                            <table cellpadding="0" border="0" cellspacing="0" class="rnb-social-align" style="float: right;" align="right"><tbody><tr><td valign="middle" class="rnb-text-center" ng-init="width=setSocialIconsBlockWidth(item)" width="205" align="right">
                                                                        <div class="rnb-social-center">
                                                                        <table align="left" style="float:left; display: inline-block; mso-table-lspace:0pt; mso-table-rspace:0pt;" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <img alt="Facebook" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="http://p4x9.r.bh.d.sendibt3.com/2myoevxe62ve.png"></span>
                                                                        </td></tr></tbody></table></div><div class="rnb-social-center">
                                                                        <table align="left" style="float:left; display: inline-block; mso-table-lspace:0pt; mso-table-rspace:0pt;" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <img alt="Twitter" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="http://p4x9.r.bh.d.sendibt3.com/2myofode62ve.png"></span>
                                                                        </td></tr></tbody></table></div><div class="rnb-social-center">
                                                                        <table align="left" style="float:left; display: inline-block; mso-table-lspace:0pt; mso-table-rspace:0pt;" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <img alt="Instagram" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="http://p4x9.r.bh.d.sendibt3.com/2myoggte62ve.png"></span>
                                                                        </td></tr></tbody></table></div><div class="rnb-social-center">
                                                                        <table align="left" style="float:left; display: inline-block; mso-table-lspace:0pt; mso-table-rspace:0pt;" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <img alt="YouTube" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="http://p4x9.r.bh.d.sendibt3.com/2myoh99e62ve.png"></span>
                                                                        </td></tr></tbody></table></div><div class="rnb-social-center">
                                                                        <table align="left" style="float:left; display: inline-block; mso-table-lspace:0pt; mso-table-rspace:0pt;" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;" align="left">
                                                                        <span style="color:#ffffff; font-weight:normal;">
                                                                            <img alt="Pinterest" border="0" hspace="0" vspace="0" style="vertical-align:top;" target="_blank" src="http://p4x9.r.bh.d.sendibt3.com/vnk3fx9e62ve.png"></span>
                                                                        </td></tr></tbody></table></div></td>
                                                                </tr></tbody></table></td>
                                                    </tr></tbody></table></td></tr></tbody></table></td>
                            </tr><tr><td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table></td>
                </tr></tbody></table></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded;" name="Layout_3" id="Layout_3"><tbody><tr><td class="rnb-del-min-width" align="center" valign="top" bgcolor="#ebeded" style="min-width:590px; background-color: #ebeded;">
                        <table width="590" class="rnb-container" cellpadding="0" border="0" align="center" cellspacing="0" style="padding-right:20px; padding-left:20px;"><tbody><tr><td height="10" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td>
                                    <div style="font-size:14px; color:#888888; font-weight:normal; text-align:center; font-family:Arial,Helvetica,sans-serif;"><div>
<div style="line-height:24px;"></div>

<div style="line-height:24px;">You received this email because you are registered with Your Company</div>

<div> </div>
</div>
</div>
                                    <div style="font-size:14px; font-weight:normal; text-align:center; font-family:Arial,Helvetica,sans-serif;">
                                        <a style="text-decoration:underline; color:#666666;font-size:14px;font-weight:normal;font-family:Arial,Helvetica,sans-serif;" target="_blank" href="2rlc2le62vg.html">Unsubscribe here</a></div>
                                </td></tr><tr><td height="10" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td>
                                    <div style="text-align:center;">
                                        <div style="font-family:Arial, Helvetica, sans-serif;color:#888888;opacity:0.8">Sent by</div><a href="http://p4x9.r.bh.d.sendibt3.com/b2dca59e62vk.html" target="_blank"><img border="0" hspace="0" vspace="0" width="121" height="33" alt="SendinBlue" style="margin:auto;" src="http://p4x9.r.bh.d.sendibt3.com/vnk3gppe62ve.png"></a>
                                    </div></td>
                            </tr><tr><td height="10" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table></td>
                </tr></tbody></table></td>
    </tr><tr><td align="center" valign="top" bgcolor="#ebeded" style="background-color:#ebeded;">

            <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0" cellspacing="0" bgcolor="#ebeded" style="min-width:590px; background-color:#ebeded;" name="Layout_4" id="Layout_4"><tbody><tr><td class="rnb-del-min-width" align="center" valign="top" bgcolor="#ebeded" style="min-width:590px; background-color: #ebeded;">
                        <table width="590" class="rnb-container rnb-yahoo-width" cellpadding="0" border="0" align="center" cellspacing="0" style="padding-right:20px; padding-left:20px;"><tbody><tr><td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr><tr><td style="font-size:14px; color:#888888; font-weight:normal; text-align:center; font-family:Arial,Helvetica,sans-serif;">
                                    <div><div>© 2018 Your Company</div>
</div>
                                </td></tr><tr><td height="20" style="font-size:1px; line-height:1px;"> </td>
                            </tr></tbody></table></td>
                </tr></tbody></table></td>
    </tr></tbody></table><!--[if gte mso 9]>
                        </td>
                        </tr>
                        </table>
                        <![endif]--></td>
        </tr></tbody></table><div style="color: #727272; font-size: 10px;"><center></center></div></body></html>

`;

module.exports = template;

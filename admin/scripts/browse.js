/*
* LimeSurvey
* Copyright (C) 2007 The LimeSurvey Project Team / Carsten Schmitz
* All rights reserved.
* License: GNU/GPL License v2 or later, see LICENSE.php
* LimeSurvey is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
* 
* $Id: browse.php 8331 2010-02-01 23:59:05Z c_schmitz $
*/

$(document).ready(function(){
    $(".deleteresponse").click(function(){
        thisid=removechars($(this).attr('id')); 
        answer = confirm(strdeleteconfirm);
        if (answer==true)
        {
            $('#deleteanswer').val(thisid);
            $('#resulttableform').submit();
        }
    });
});
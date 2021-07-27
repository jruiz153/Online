function mensaje_bar(mensaje) {
    var notify = $.notify('<strong>Liquidando</strong> Por favor espere...', {
        allow_dismiss: false,
        showProgressbar: true,
        type: 'success',
        progress: 1,
    });

    //setTimeout(function () {
    //    notify.update({ 'type': 'success', 'message': '<strong>Success</strong> La liquidacion fue generada!', 'progress': 75 });
    //}, 2000);
}

function mensaje_basico(mensaje) {
    $.notify('Hello World', {
        offset: 50
    });
}

function mensaje_error(mensaje) {
    $.notify({
        title: '<b style=\"font-size:16px\">Error!!</b>',
        message: '<div style=\"font-size:16px\">' + mensaje + "</div>",
        newest_on_top: false
    },

    {
        type: 'danger',
        delay: 1500,
        placement: {
            from: "bottom"
        },
    });
}

function mensaje_ok(mensaje) {
    $.notify({
        title: '<b style=\"font-size:16px\">Mensaje</b>',
        message: '<div style=\"font-size:16px\">' +  mensaje + "</div>"
    }, {
        type: 'success',
        delay: 1000,
        placement: {
            from: "bottom"
        }
    }

    );
}

function mensaje_usuario(mensaje, tipo) {
    $.notify({
        //icon: 'glyphicon glyphicon-warning-sign',
        title: '<b style=\"font-size:16px\">Mensaje</b>\n<br>',
        message: '<div style=\"font-size:16px\">' + mensaje + "</div>"

    }, {
        type: tipo,
        delay: 1000,
        placement: {
            from: "bottom"
        },
    }

    );
}

function mensaje_guia_cortesia(host,guia,usuario) {
    $.notify({
        title: '<b style=\"font-size:16px\">Imprimir Guía cortesia generada</b>',
        message: "<a style=\"font-size:16px\" href='http://" + host + "/AplicacionWebPDSIHTML/Guia3.aspx?Guia=" + guia + "&usuario=" + usuario + "' target='nueva_ventana'>" + guia + "</a>",
        newest_on_top: true,
        offset: 500,
    },

    {
        type: 'danger',
        delay: 0,
        placement: {
            from: "top"
        },
    });

}

//function mensaje_animado(mensaje) {
//    $.notify(mensaje, {
//        animate: {
//            enter: 'animated zoomInDown',
//            exit: 'animated zoomOutUp',
//            }
//        },
//        {
//            type: 'success',
//            placement: {
//                from: "bottom"
//            },
//        }
//    );
//}



/*$(document).ready(function () {

    $("#Nom_CiudadO").autocomplete({
        source: function (request, response) {

            $.ajax({
                url: "../Guia/BuscarCiudad",
                type: "POST",
                dataType: "json",
                data: { cod_pais: 1, ciudad: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            ID: item.Cod_Ciudad,
                            value: item.Nom_Ciudad
                        };
                    }))
                }
            })
        },
        select: function (event, ui) {
            document.getElementById('Cod_CiudadOSelected').value = ui.item.ID;
        }
    });

    $("#Nom_CiudadD").autocomplete({
        source: function (request, response) {

            $.ajax({
                url: "../Guia/BuscarCiudad",
                type: "POST",
                dataType: "json",
                data: { cod_pais: 1, ciudad: request.term },
                success: function (data) {
                    response($.map(data, function (item) {
                        return {
                            ID: item.Cod_Ciudad,
                            value: item.Nom_Ciudad
                        };
                    }))
                }
            })
        },
        select: function (event, ui) {
            document.getElementById('Cod_CiudadDSelected').value = ui.item.ID;
        }
    });
})//fin document.ready*/
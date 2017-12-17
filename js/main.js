$(document).ready(() => {
    ajaxForm();
});

(function ($) {
    "use strict"; // Start of use strict
    //ajax call to github api
    $.ajax({
        url: "https://api.github.com/users/jibanez74",
        data: {
            client_id: "ead3f9f29dbe627f300e",
            client_secret: "9d9d89d1545d03e7cecbe51abd91068a4b204e81"
        }
    }).done(function (user) {
        $("#info").html(`
            <ul class="list-group">
                <li class="list-group-item">
                    Nombre: ${user.name}
                </li>
                <li class="list-group-item">
                    Repos Públicos: ${user.public_repos}
                </li>
                <li class="list-group-item">
                    Email: jibanez.romany74@gmail.com
                </li>
                <li class="list-group-item">
                    Trabaja para ${user.company}
                </li>
                <li class="list-group-item">
                    Localizado en ${user.location}
                </li>
            </ul>

            <br>

            <a href="${user.html_url}" target="_blank" class="btn btn-link btn-block">
                Ver Github <i class="fa fa-arrow-circle-o-right"></i>
            </a>
        `);
        $.ajax({
            url: "https://api.github.com/users/jibanez74/repos",
            data: {
                per_page: 6,
                sort: "created_asc"
            }
        }).done(function (repos) {
            $.each(repos, function (index, value) {
                $("#repos").append(`
                    
<div class="card bg-warning text-dark p-2">
    <div class="card-header">
        <h3 class="card-title">
            ${value.name}
        </h3>
    </div>

    <div class="card-body">
        <p class="card-text">
            ${value.description}
        </p>
    </div>

    <div class="card-footer">
        <a href="${value.html_url}" class="btn btn-light" target="_blank">
            Go to repo <i class="fa fa-arrow-circle-o-right"></i>
        </a>
    </div>
</div>


                `);
            });
        });
    }); // end of done function

    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse>ul>li>a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

})(jQuery); // End of use strict

function ajaxForm () {
    $("#myForm").submit((e) => {
        let valid_name = false;
        let valid_email = false;
        let valid_msg = false;
        let filter_email = $("#email").val();

        //verify name field
        if ($("#nombre").val().length <= 1) {
            $("#alert-name").removeClass("d-none");
            valid_name = false;
        } else {
            valid_name = true;
        }

        if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(filter_email)) {
            valid_email = true;
        } else {
            $("#alert-email").removeClass("d-none");
            valid_email = false;
        }

        //verify msg field
        if ($("#mensaje").val().length <= 0) {
            $("#alert-msg").removeClass("d-none");
            valid_msg = false;
        } else {
            valid_msg = true;
        }

        //verify values and ajax
        if (valid_name === true && valid_email === true && valid_msg === true) {
            $.ajax({
                url: 'contact.php',
                type: 'POST',
                data: 'name='+$("#nombre").val()+'&email='+$("#email").val()+'&message='+$("#mensaje").val(),
                success: () => {
                    $("#card-body-form").fadeOut("slow");
                    $("#card-header-form").fadeIn("slow")
                }
            }).done(() => {
                $("#nombre, #email, #mensaje").val("");
                setTimeout(() => {
                    $("#card-header-form").fadeOut("slow");
                    $("#card-body-form").fadeIn("slow");
                }, 10000);
            });
        } else {
            setTimeout(() => {
                $("#alert-name, #alert-email, #alert-msg").slideUp();
            }, 10000);
        }
        e.preventDefault();
    });
}
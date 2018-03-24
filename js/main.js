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
                    Email: jose@blindpenguincode.com
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
                    
<div class="card bg-warning text-dark py-3 mb-3">
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

function ajaxForm() {
    $("#myForm").submit((e) => {
        let valid_name;
        let valid_email;
        let valid_msg;
        let filter_email = $("#email").val();

        if ($("#nombre").val().length < 2 || $("#nombre").val().length > 25) {
            $("#alert-name").show();
            valid_name = false;
        } else {
            valid_name = true;
        }

        if (validate_email(filter_email)) {
            valid_email = true;
        } else {
            $("#alert-email").show();
            valid_email = false;
        }

        if ($("#mensaje").val().length < 2) {
            $("#alert-msg").show();
            valid_msg = false;
        } else {
            valid_msg = true;
        }

        if (valid_name === true && valid_email === true && valid_msg === true) {
            $.ajax({
                url: 'mail.php',
                type: 'POST',
                data: 'name=' + $("#nombre").val() + '&email=' + $("#email").val() + '&message=' + $("#mensaje").val(),
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
                $(".myAlert").hide();
            }, 10000);
        }
        e.preventDefault();
    });
}

function validate_email (email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
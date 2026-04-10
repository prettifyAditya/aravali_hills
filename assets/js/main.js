$(function () {
    if (!$('header').is('.header-fixed')) {
        $(window).on('scroll', function () {
            $(this).scrollTop() > 100 ? $('header').addClass('header-fixed') : $('header').removeClass('header-fixed');
        });
        $(window).scrollTop() > 100 ? $('header').addClass('header-fixed') : $('header').removeClass('header-fixed');
    }
    const $backToTop = $('.back-to-top');

    $(window).on('scroll', function () {
        if ($backToTop) {
            $backToTop.toggleClass('active', $(this).scrollTop() > 200);
        }
    });
    $backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    //
    $searchInput = $('.search_input')
    $searchDropdown = $('.search_dropdown')
    $moreFilterBtn = $('.moreFilters')
    $bottomFilterWrap = $('.bottom_filter')
    $closeFilterBtn = $('.bottom_filter .close_btn')
    $searchInput.on('input', function() {
        if ($(this).val() != '') {
            $searchDropdown.slideDown();
            $searchDropdown.addClass('is-open');
        } else {
            $searchDropdown.stop().slideUp();
            $searchDropdown.removeClass('is-open');
        }
    });
    if(window.innerWidth > 768) {
        $moreFilterBtn.on('click', function() {
            $bottomFilterWrap.slideToggle();
            $bottomFilterWrap.toggleClass('is-open');
            if($bottomFilterWrap.hasClass('is-open')){
                $(this).text("Hide Advanced Filters")
            } else {
                $(this).text("Show Advanced Filters")
            }
        }); 
    } else {
        // $bottomFilterWrap.addClass("model")
        $moreFilterBtn.on('click', function() {
            openModel(".filter-pop")
            // $bottomFilterWrap.addClass("is-open")
            // $bottomFilterWrap.parents(".banner-wrapper").addClass("model_open")
            // $("body, html").addClass("overflow-hidden")
        })
        $(".search-btn").on("click", function() {
            closeModel(".filter-pop")
        })
        // $closeFilterBtn.on('click', function() {
        //     $bottomFilterWrap.removeClass("is-open")
        //     $bottomFilterWrap.parents(".banner-wrapper").removeClass("model_open")
        //     $("body, html").removeClass("overflow-hidden")
        // })
    }

    $('.title').click(function () {
        var parentLi = $(this).closest('.hasDropdown');
        var slideMenu = parentLi.find('.dropdown-menu-ham');
        
        $('.dropdown-menu-ham').not(slideMenu).slideUp();
        $('.title').not(this).removeClass('active');
    
        $(this).toggleClass('active');
        slideMenu.stop().slideToggle();
    });

    // Login Pop JS
    $MainWelcome = $('.main_body')
    $LoginBody = $('.login_body')
    $ForgetBody = $('.forget_body')
    $SignUpBody = $('.signup_body')
    $MobileBody = $('.mobile_body')
    $OtpBody = $('.otp_body')
    $SignUpBtn = $('.signUpBtn')
    $loginButton = $('.loginButton')
    $forgetBtn = $('.forgetBtn')
    $backLoginBtn = $('.backLoginBtn')
    $backMobileBtn = $('.backMobileBtn')
    $mobileBtn = $('.mobileBtn')
    $sendOtpBtn = $('.sendOtpBtn')

    $SignUpBtn.on('click', function() {
        $MainWelcome.hide()
        $LoginBody.hide()
        $ForgetBody.hide()
        $MobileBody.hide()
        $OtpBody.hide()
        $SignUpBody.show()
    })
    $loginButton.on('click', function() {
        $MainWelcome.hide()
        $LoginBody.show()
        $ForgetBody.hide()
        $MobileBody.hide()
        $SignUpBody.hide()
        $OtpBody.hide()
    })
    $forgetBtn.on('click', function() {
        $MainWelcome.hide()
        $LoginBody.hide()
        $ForgetBody.show()
        $MobileBody.hide()
        $SignUpBody.hide()
        $OtpBody.hide()
    })
    $backLoginBtn.on('click', function() {
        $MainWelcome.show()
        $LoginBody.hide()
        $ForgetBody.hide()
        $MobileBody.hide()
        $SignUpBody.hide()
        $OtpBody.hide()
    })
    $backMobileBtn.on('click', function() {
        $MainWelcome.hide()
        $LoginBody.hide()
        $ForgetBody.hide()
        $MobileBody.show()
        $SignUpBody.hide()
        $OtpBody.hide()
    })
    $mobileBtn.on('click', function() {
        $MainWelcome.hide()
        $LoginBody.hide()
        $ForgetBody.hide()
        $MobileBody.show()
        $SignUpBody.hide()
        $OtpBody.hide()
    })
    $sendOtpBtn.on('click', function() {
        $MainWelcome.hide()
        $LoginBody.hide()
        $ForgetBody.hide()
        $MobileBody.hide()
        $SignUpBody.hide()
        $OtpBody.show()
    })

    const labelInput = $("input, textarea");
    labelInput.on('change', function () {
        if ($(this).val() !== "") {
            $(this).addClass("valid");
        } else {
            $(this).removeClass("valid");
        }
    });
    const formControls = $(".form-control");
    formControls.on('focus input change blur', throttle(handleForm));
    formControls.each(function () {
        handleForm.call(this);
    });

    //

    niceSelect($);
    $('select').niceSelect();

    //

    adjustWhatsAppUrls();
    $(window).resize(function () {
        adjustWhatsAppUrls();
    });

    //

    $('[data-slide]').click(function () {
        $(".plus-ico").toggleClass('active');
        var slide = $(this).data('slide');
        $(slide).stop().slideToggle();
        // window.scrollBy({ top: 100, behavior: 'smooth' });
    })

    startCountAnimation();
    $(window).scroll(function () {
        startCountAnimation();
    })

    //
    window.addEventListener('load', handleAnimations);
    window.addEventListener('resize', handleAnimations);
    window.addEventListener('orientationchange', handleAnimations);
    handleAnimations();

    //

    document.querySelectorAll('img.svg').forEach(img => {
        fetch(img.src)
            .then(response => response.text())
            .then(data => {
                const svg = new DOMParser().parseFromString(data, 'image/svg+xml').querySelector('svg');
                if (svg) {
                    svg.classList.add('svg');
                    img.replaceWith(svg);
                }
            });
    });

    //

    $(document).on('click', '.tab-nav [data-tab]:not(.disabled-btn)', function () {
        var tab = $(this).addClass('active').siblings().removeClass('active').end().data('tab');
        $('.tab-nav-content >*[data-tab= ' + tab + ']').addClass('active').siblings().removeClass('active');
    });

    //

    $(document).on('click', '[data-scrollTo]', function () {
        headerheight = parseInt($(':root').css('--headerfixed')) + parseInt($(':root').css('--headerstripfixed'));
        var section = $(this).attr('data-scrollTo');
        if (section) {
            $('html, body').stop().animate({
                scrollTop: $(section).offset().top - headerheight
            }, 1000);
        }
    });

    //

    $(document).on('click', '[data-model]', function () {
        var model = $(this).attr('data-model');
        openModel(model);
    });

    $(document).on('click', '.overlay,.close', function () {
        closeModel();
    });

    //

    $('input[type="file"].form-control').on('change', function () {
        var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
        if (fileName) {
            $(this).siblings('.file-name').css('--filenameinitial', `"${fileName}"`);
        } else {
            $(this).siblings('.file-name').css('--filenameinitial', 'var(--filename)');
        }
    });

    //

    const inputs = document.querySelectorAll(".otpInput input");

    inputs.forEach(function (input, index) {
        input.setAttribute("data-index", index);
        input.addEventListener("keyup", handleOtp);
        input.addEventListener("paste", handleOnPasteOtp);
    });
    function handleOtp(e) {
        var input = e.target;
        var value = input.value;
        var isValidInput = value.match(/[0-9a-z]/gi);
        input.value = "";
        input.value = isValidInput ? value[0] : "";
        var fieldIndex = parseInt(input.getAttribute("data-index"));
        if (fieldIndex < inputs.length - 1 && isValidInput) {
            inputs[fieldIndex + 1].focus();
        }
        if (e.key === "Backspace" && fieldIndex > 0) {
            inputs[fieldIndex - 1].focus();
        }
        if (fieldIndex == inputs.length - 1 && isValidInput) {
            submit();
        }
    }
    function handleOnPasteOtp(e) {
        e.preventDefault();
        var pastedText = (e.clipboardData || window.clipboardData).getData("text");
        for (var i = 0; i < pastedText.length; i++) {
            if (pastedText[i].match(/[0-9a-z]/gi)) {
                inputs[i].value = pastedText[i];
                inputs[i].dispatchEvent(new Event("keyup"));
            }
        }
    }

    function submit() {
        console.log('Submit Form');
    }


    $('.back-to-login').click(function () {
        $('.otp-verify').hide();
        $('#loginForm').show();
    });

    $('.otp-pop-btn').click(function () {
        $('.otp-verify').show();
        $('#loginForm').hide();
    });

    //

    $(document).on('click', '[data-video]', function () {
        // lenis.stop();
        var src = $(this).attr('data-video');
        if (src.includes('youtube.com/embed/')) {
            var videoId = src.split('embed/')[1].split('?')[0];
            src += '&autoplay=1&mute=1&loop=1&playlist=' + videoId;
            $('#iframe1').attr('src', src);
        }
        else {
            $('#iframe1').attr('src', src);
        }
        $('.video-pop').addClass('is-open');
    });
    $('.close-video').on('click', function () {
        // lenis.start();
        $('#iframe1').attr('src', '');
        $('.video-pop').removeClass('is-open');
    });

    //

    $('.summery-detail-content .col:has(article) .title').click(function () {
        var $parentCol = $(this).parent('.col');
        $('.summery-detail-content .col').not($parentCol).find('article').stop().slideUp();
        $('.summery-detail-content .col').not($parentCol).removeClass('active');
        $parentCol.toggleClass('active');
        $(this).siblings('article').stop().slideToggle();
    });

    //convert tab nav to dropdown in mobile

    if ($(window).width() < 991) {
        $('.tab-filter').each(function () {
            var $this = $(this);
            setTimeout(function () {
                var activeText = $this.find('li.active').text();
                $this.find('ul').before(`<span class="tab-filter-span">${activeText}</span>`);
            }, 0);

            $(document).on('click', '.tab-filter-span', function () {
                $(this).siblings('ul').stop().slideToggle();
            })
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.tab-filter-span').length) {
                $('.tab-filter ul').stop().slideUp();
            }
        });
    }

    //Sliders

    function commonSlider1(containerSelector, prevButtonSelector, nextButtonSelector) {
        return new Swiper(containerSelector, {
            loop: false,
            speed: 1500,
            navigation: {
                prevEl: prevButtonSelector,
                nextEl: nextButtonSelector,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },
                675: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                }
            }
        });
    }
    commonSlider1('.product_slider', '.product-prev', '.product-next')
    commonSlider1('.testimonial_slider', '.testimonial-prev', '.testimonial-next')
    commonSlider1('.more-slider', '.more-prev', '.more-next')

    new Swiper('.text-slider', {
        loop: true,
        speed: 1000,
        direction: 'vertical',
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1
    });

    new Swiper('.builder-slider', {
        loop: true,
        speed: 2500,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            540: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 4.2,
                spaceBetween: 25,
            }
        },
    });

    new Swiper('.interior_swiper', {
        loop: false,
        speed: 1000,
        navigation: {
            prevEl: '.interior-prev',
            nextEl: '.interior-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            675: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 18,
            }
        },
    });

    new Swiper('.prolist_slider', {
        loop: true,
        speed: 800,
        navigation: {
            prevEl: '.prolist-prev',
            nextEl: '.prolist-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 10,
            },
            675: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            }
        },
    });

    new Swiper('.certificate-slider', {
        loop: true,
        speed: 1500,
        navigation: {
            prevEl: '.certificate-prev',
            nextEl: '.certificate-next',
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            675: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },
    });

    new Swiper('.testimonial-slider', {
        loop: true,
        speed: 1500,
        spaceBetween: 16,
        navigation: {
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            675: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            1280: {
                centeredSlides: true,
                slidesPerView: 1.5,
                spaceBetween: 16,
            }
        },
    })

    new Swiper('.project-gallery-swiper', {
        loop: true,
        speed: 1500,
        navigation: {
            prevEl: ".project-gallery-prev",
            nextEl: ".project-gallery-next",
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3.5,
                spaceBetween: 15,
            }
        },
    })

});


//



$(document).ready(function ()
{
    $("input[name='tab-input']").change(function ()
    {
        const tabId = $(this).val()

        $('.service__tab-content').each(function ()
        {
            $(this).attr('id') == tabId ? $(this).removeClass('disabled').addClass('grid').addClass('grid-card').addClass('container') : $(this).addClass('disabled')
        })
    })

    $(window).on('scroll', function() {
        var headerHeight = $('.header').outerHeight(); 
        var scrollTop = $(window).scrollTop(); 
        
        if (scrollTop > headerHeight) {
          $('.header__nav').addClass('fixed'); 
        } else {
          $('.header__nav').removeClass('fixed'); 
        }
      });

      $(document).ready(function() {
        $('.can-scale').click(function() {
          $('.overlay').addClass('active');
          $(this).addClass('scale');
        });
        $('.overlay').click(function() {
          $('.overlay').removeClass('active');
          $('.can-scale').removeClass('scale');
        });
      });

})

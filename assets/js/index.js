
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
        var headerHeight = $('.header').outerHeight(); // Lấy chiều cao của phần tử header
        var scrollTop = $(window).scrollTop(); // Lấy vị trí scroll hiện tại của trình duyệt
      
        if (scrollTop > headerHeight) {
          $('.header__nav').addClass('fixed'); // Thêm lớp fixed để cố định phần tử header
        } else {
          $('.header__nav').removeClass('fixed'); // Loại bỏ lớp fixed nếu không cần cố định phần tử header
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

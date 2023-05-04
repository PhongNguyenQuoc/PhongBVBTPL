
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

})

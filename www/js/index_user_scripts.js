(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
        
        /* button  Akıllı Görevler */
    $(document).on("click", ".uib_w_16", function(evt)
    {
        /* your code goes here */ 
    });
        
        /* button  {{_name}} */
    $(document).on("click", ".uib_w_18", function(evt)
    {
         activate_subpage("#uib_page_5"); 
    });
    
        /* button  Geri */
    $(document).on("click", ".uib_w_24", function(evt)
    {
         activate_subpage("#uib_page_3"); 
    });
    
        /* button  Geri */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         activate_subpage("#uib_page_4"); 
    });
    
        /* button  Anasayfa */
    $(document).on("click", ".uib_w_39", function(evt)
    {
         activate_subpage("#uib_page_3"); 
    });
     
        /* listitem  .uib_w_45 */
    $(document).on("click", ".uib_w_45", function(evt)
    {
         activate_subpage("#uib_page_4"); 
    });
    
        /* button  Location */
    $(document).on("click", ".uib_w_48", function(evt)
    {
         activate_subpage("#uib_page_5"); 
    });

        /* button  Güvenli Çıkış */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         activate_subpage("#uib_page_7"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

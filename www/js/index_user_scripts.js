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
     
        /* button  Anasayfa */
    $(document).on("click", ".uib_w_39", function(evt)
    {
         activate_subpage("#uib_page_3"); 
    });
     
        /* listitem  {{_name}} */
    $(document).on("click", ".uib_w_54", function(evt)
    {
         activate_subpage("#uib_page_4"); 
    });

        /* button  #Geri1 */
    $(document).on("click", "#Geri1", function(evt)
    {
         activate_subpage("#uib_page_3"); 
    });     
     
        /* button  Geri */
    $(document).on("click", ".uib_w_25", function(evt)
    {
         activate_subpage("#uib_page_4"); 
    });
     
     
        /* button  Geri */
    $(document).on("click", ".uib_w_82", function(evt)
    {
         activate_subpage("#uib_page_5"); 
    });
     

     
        /* listitem  {{_default_name}} */
    $(document).on("click", ".uib_w_74", function(evt)
    {
         activate_subpage("#uib_page_9"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

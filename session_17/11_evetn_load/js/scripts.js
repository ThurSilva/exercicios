/* window.addEventListener('load',function(){
    alert('assine os termos');
}); */

window.addEventListener('beforeunload', function(e){
    event.returnValue=null;
});
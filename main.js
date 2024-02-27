// Setup
const BackToTopButton = document.querySelector('button#back-to-top');

// Variables
var FadeDebug = false;
var FadeCurrentDisplay = 'none';

// Functions
document.addEventListener('scroll', ()=>{

    let ScrollX = window.scrollY;

    if(!FadeDebug){

        if(ScrollX >= 300){

            if(FadeCurrentDisplay == 'none'){

                FadeCurrentDisplay = 'block';
                FadeAnimationBackToTop('block', 1);

                setTimeout(function(){
                    BackToTopButton.style.opacity = 1;

                }, 850);

            }

        }else{

            if(FadeCurrentDisplay == 'block'){

                FadeCurrentDisplay = 'none';
                FadeAnimationBackToTop('none', 0);

                setTimeout(function(){
                    BackToTopButton.style.opacity = 0;

                }, 850);

            }

        }
        
    }

});

// FadeAnimation Back To Top Function
function FadeAnimationBackToTop(fadeDisplay, fadeOpacity){

    if(!FadeDebug){

        FadeDebug = true;

        if(fadeDisplay == 'block'){
            BackToTopButton.style.display = fadeDisplay;

        }

        BackToTopButton.animate({ 'opacity': fadeOpacity }, 850);

        if(fadeDisplay == 'none'){
            setTimeout(()=>{
                BackToTopButton.style.display = fadeDisplay;

            }, 1200)
            
        }

        setTimeout(()=>{
            FadeDebug = false;

        }, 1900);
        
    }

}

// Back To Top Function
BackToTopButton.addEventListener('click', ()=>{

    scrollTo({ 'top': 0, 'behavior': 'smooth' });

})

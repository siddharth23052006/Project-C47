class Form{
    constructor(){
        this.title = createElement('h1');
        this.title2 = createElement('h2');
        this.genderTitle = createElement('h3');
        this.email = createInput('Email address');
        this.age = createInput('Age');
        this.gender = createRadio('Gender');
            this.gender.option('Male');
            this.gender.option('Female');
            this.gender.option('Other');
        this.name = createInput('Your Name');
        this.button = createButton('SUBMIT');
        this.buttonPage2 = createButton('SUBMIT');
        this.organs = createSelect('Select the body part');
    }

    hide(){
        this.email.hide();
        this.age.hide();
        this.gender.hide();
        this.name.hide();
        this.button.hide();
        this.title2.hide();
        this.genderTitle.hide();
    }

    display(){
        this.title.html('Healthcare App');
        this.title.position(width/2-45, 5);
        this.title2.html('Fill the following details to proceed');
        this.title2.position(width/2-120, 70);

        this.name.position(width/2-30,200);
        this.age.position(width/2-30,230);
        this.email.position(width/2-30,260);

        this.gender.position(width/2-30,height/2-20);
        this.genderTitle.html('Your Gender:');
        this.genderTitle.position(width/2-30,height/2-60);

        this.button.position(width-120, height-60);
        this.button.mousePressed(()=>{
            this.hide();
            
            user.name = this.name.value();
            user.email = this.email.value();
            user.age = this.age.value();
            user.gender = this.gender.value();

            user.index++;
            user.update(this.name.value());
                this.organs.option('Select the part which you are having issues with');
                this.organs.option('MENTAL HEALTH ISSUES');
                this.organs.option('Bone Problems');
                this.organs.option('Joint Problems');
                this.organs.option('Ligament Issues');
                this.organs.option('Muscular Problems');
                this.organs.option('Tendon Issues');
                this.organs.option('Tooth Problems');
                this.organs.option('Tongue Problems');
                this.organs.option('Salivary Glands Problems');
                this.organs.option('Stomach Problems');
                this.organs.option('Intestinal issues');
                this.organs.option('Liver Problems');
                this.organs.option('Gallbladder Problems');
                this.organs.option('Pancreatic Problems');
                this.organs.option('Anal canal and anus Issues');
                this.organs.option('Blood Problems');
                this.organs.option('Respiratory Tract Issues');
                this.organs.option('Urinary Tract Issues');
                this.organs.option('Circulatory System Issues');
                this.organs.option('Heart Issues');
                this.organs.option('Brain-Related Issues');
                this.organs.option('Spinal Issues');
                this.organs.option('Eye related problems');
                this.organs.option('Ear Related problems');
                this.organs.option('Skin Related problems')
            this.organs.position(width/2-40,150);
            this.buttonPage2.position(width-120, height-60);
        });
        this.buttonPage2.mousePressed(()=>{
            window.open("Search.html/?q=" + this.organs.value());
        });
    }
}

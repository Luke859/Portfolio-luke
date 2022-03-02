<template>
    <section class="s5">
        <div class="main-container">
            <h1>ME CONTACTER</h1>
            <div class="contact">
                <form id="contact-form" action="https://formsubmit.co/lukebryan@orange.fr" method="POST"  enctype="multipart/form-data" >
                    <input type="hidden" name="_captcha" value="false">
                    <input class="input-field" type="text" name="Prénom" placeholder="Prénom *" required>
                    <input class="input-field" type="text" name="Nom" placeholder="Nom *" required>
                    <input class="input-field" type="text" name="Email" placeholder="Email *" required>
                    <input type="hidden" name="_next" value="http://localhost:3000/">
                    <textarea class="input-field" name="Message" required></textarea>
                    <!-- <input type="file" name="attachment" accept="image/png, image/jpeg"> -->
                    <input id="submit-btn" type="submit" value="Envoyer">
                </form>

                <div class="contact-text">
                    <h3>Informations</h3>
                    <p>Si vous avez plus de questions n'hésiter pas à me contacter</p>
                    <div class="info">
                        <li><a class="fa fa-phone" ></a> +33 671771971</li>
                        <li><a class="fa fa-envelope" ></a> lukebryan@orange.fr</li>
                        <li><a class="fa fa-map-marker" ></a> 13 Rue Stéphane LeDuc, Nantes 44100</li>
                    </div>
                    <div class="reseaux">
                        <li><a target="_blank" class="fa fa-facebook" href="https://www.facebook.com/profile.php?id=100005241454058"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a target="_blank" href='https://www.instagram.com/luke_jones8509/' class="fa fa-instagram"></a></li>
                    </div>
                </div>

                <!-- <vue-recaptcha sitekey="6LeIP6weAAAAAOshHIwb5EROFETJi-MtbRtdyN2e">
                <button>Click me</button>
                </vue-recaptcha> -->
            </div>
        </div>
    </section>
</template>

<style>


.contact {
    display: grid;
    background-color: white;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    /* -webkit-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    -moz-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    box-shadow: -33px 23px 2px 2px rgba(0,0,0,1); */
}

@media screen and (max-width: 700px){
    .contact {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'left'
    'right';
    }

    .contact-text{
        justify-content: center;
        text-align: center;
    }
}

#contact-form{
    grid-area: left;
    display: grid;
    display: block;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 10px;
    background-color: rgb(0, 127, 255);
    margin-bottom: 50px;
    -webkit-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    -moz-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
}

#contact-form textarea{
    min-height: 100px;
    font-size: 14px;
}

.input-field {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: 2px solid black;
    font-size: 14px;
    margin-top: 20px;
}

#submit-btn{
    margin-top: 10px;
    width: 20%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    background-color: black;
    color: white;
    float: left;
    border-radius: 10px;
}

#submit-btn:hover{
    border: 2px solid white;
}

.contact-text{
    grid-area: right;
    display: grid;
    display: block;
    text-align: left;
    padding-left: 100px;
}

.fa {
    padding: 10px;
    font-size: 20px;
    width: 50px;
    text-decoration: none;
}

.fa:hover{
    text-decoration: none;
    list-style-type: none;

}

.info li {
    list-style-type: none;
    font-size: 22px;
    padding-top: 30px;
}

.reseaux li {
    list-style-type: none;
    font-size: 50px;
    padding-top: 70px;
    float: left;
}

.fa-twitter{
    padding-left: 20px;
}

.fa-instagram{
    padding-left: 40px;
}
</style>

<template>
    <section class="s5">
        <div class="main-container">
            <h1>CONTACT</h1>
            <form id="contact-form" action="https://formsubmit.co/lukebryan@orange.fr" method="POST"  enctype="multipart/form-data" >
                <input type="hidden" name="_captcha" value="false">
                <input class="input-field" type="text" name="Prénom" placeholder="Prénom *" required>
                <input class="input-field" type="text" name="Nom" placeholder="Nom *" required>
                <input class="input-field" type="text" name="Email" placeholder="Email *" required>
                <input type="hidden" name="_next" value="http://localhost:3000/">
                <textarea class="input-field" name="Message" required></textarea>
                <input type="file" name="attachment" accept="image/png, image/jpeg">
                <input id="submit-btn" type="submit" value="Envoyer">
            </form>
        </div>
    </section>
</template>

<style>
#submit-btn{
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    background-color: black;
    color: white;
}

#contact-form{
    display: block;
    max-width: 800px;
    margin: 0 auto;
    border: 2px solid black;
    padding: 30px;
    border-radius: 10px;
    background-color: gray;
    margin-bottom: 50px;
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
    border: 2px solid grey;
    font-size: 14px;
    margin-top: 20px;
}
</style>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="vertical-align: top; background-color: #1565c0">
    <path fill="#42a5f5" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
    </svg>
    <section class="s2">
        <div class="main-container">
            <h1 class="s2-title">À propos de moi</h1>
            <div class="intro">
                <div class="right-block">
                    <div id="text">
                        <h3>Je m'appelle Luke Jones</h3>
                        <br>
                        <p>
                        Je suis un étudiant en Informatique à Nantes Ynov Campus. 
                        <br>
                        Mon but serait d'y préparé un bachelor et ensuite de faire un mastère. 
                        </p>
                    </div>
                    <div id="info">
                        <div class="list">
                            <label>Anniversaire : </label>
                            <p>9 Octobre 2002</p>
                        </div>
                        <div class="list">
                            <label>Âge : </label>
                            <p>19 ans</p>
                        </div>
                        <div class="list">
                            <label>Email : </label>
                            <p>Lukebryan@orange.fr</p>
                        </div>
                        <div class="list">
                            <label>Adresse : </label>
                            <p>13 Rue Stéphane LeDuc</p>
                        </div>
                        <div class="list">
                            <label>Télephone : </label>
                            <p>06 71 77 19 71</p>
                        </div>
                        <div class="list">
                            <label>Réseaux : </label>
                            <div class="apps">
                                <li><a target="_blank" class="fa fa-facebook" href="https://www.facebook.com/profile.php?id=100005241454058"></a></li>
                                <li><a href="#" class="fa fa-twitter"></a></li>
                                <li><a target="_blank" href='https://www.instagram.com/luke_jones8509/' class="fa fa-instagram"></a></li>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="left-block">
                    <div class="picture">
                        <img id="Luke-photo" src="../assets/photo_1.jpg" />
                        <a target="_blank" href="cv_de_luke.pdf" download="" class="CV"><i class="fa fa-download"></i>Télécharger CV</a>
                    </div>
                    <div class="find">
                        <h4>Ce que je recherche ?</h4>
                        <br>
                        <p>
                        - un stage de 6 semaines à partir du 17 mai jusqu'à fin juin en informatique
                        <br>
                        - une alternance pour la rentrer en Septembre
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<style>
:root{
    --mainText: black;
    --secondaryText: #4b5156;
}

.s2 {
    background-color: #42a5f5;
    overflow: auto;
}

.main-container {
    width: 1200px;
    margin: 0 auto;
}

@media screen and (max-width: 1200px){
    .main-container {
        width: 95%
    }
}

.intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    column-gap: 60px;
    /* -webkit-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    -moz-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    box-shadow: -33px 23px 2px 2px rgba(0,0,0,1); */
}

.s2-title{
    color: black;
    text-align: left;
    margin-bottom: 80px;
    -webkit-transform: rotate(-5deg);
    font-family: 'Chewy', cursive;
    font-size: 60px; 
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white;
}

@media screen and (max-width: 920px){
    .intro {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'left'
    'right';
    }

    .right-block{
        justify-content: center;
    }

    #Luke-photo{
    margin: 0 auto;
    }

    .s2 h1{
    padding: 10px;
    text-align: center;
    -webkit-transform: rotate(0deg);
    }

    .left-block .find {
        margin-bottom: 20px;
    }
}

.right-block {
    grid-area: right;
    display: grid;
    align-content: center;
    background-color: rgb(0, 127, 255);
    border-radius: 20px;
}

#text {
    width: 500px;
    padding: 10px;
    padding-top: 30px;
    margin: 0 auto;
    color: black;
}

#text h3{
    color: black;
    font-weight: bold;
}

#text p {
    color: black;
}



#info{
    display: flex;
    width: 500px;
    height: auto;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px;
    margin: 0 auto;

    font-size: 90%;
}

#info .list{
    display: flex;
    justify-content: center;
    width: 130px;
    height: auto;  
    border-bottom: 1px solid black;
    margin-left: 100px;
    margin-top: 40px;
}

#info .list label{
    display: flex;
    justify-content: left; 
    font-weight: bold;
    color: black;
}

#info .list p{
    display: flex;
    justify-content: left; 
    width: 200px;
    color: black;
}

#info .list .apps {
    display: flex;
    flex-wrap: nowrap;
}

.reseaux > li {
    justify-content: center;
    align-items: center;
    list-style-type: none;
    font-size: 10px;
    padding-top: 10px;
    margin: 0 auto;
}

.reseaux li a:hover{
    color: white;
}

.left-block{
    grid-area: left;
}

#Luke-photo{
    display: block;
    margin: 0 auto;
    height: 300px;
    width: 300px;
    object-fit: cover;
    border: 2px solid black;
    border-radius: 20px 20px;
    margin-bottom: 30px;

}

.CV {
    background-color: DodgerBlue;
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    border-radius: 10px;

}

.CV:hover {
    background: RoyalBlue;
    text-decoration: none;
    color: white;
}

.left-block .find {
    position: flex;
    background-color: rgb(0, 127, 255);
    margin-top: 20px;
    border-radius: 20px;
    padding: 20px;
    padding-top: 30px;
    color: black;
}

.find h4{
    color: black;
    font-weight: bold;
    text-align: left;
}

.find p {
    color: black;
    text-align: left;
}

</style>
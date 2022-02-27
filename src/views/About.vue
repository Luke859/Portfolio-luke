<template>
    <section class="s2">
        <div class="main-container">
            <div class="greeting">
                <h1>Salut! Moi c'est Luke Jones.</h1>
            </div>

            <div class="intro">
                <div class="right-block">
                    <h1>À propos de moi ?</h1>
                    <div id="text">
                        <p>
                        Je suis un étudiant en Informatique à Nantes Ynov Campus. 
                        <br>
                        Mon but serait d'y préparé un bachelor et ensuite de faire un mastère. 
                        </p>
                    </div>
                </div>

                <div class="left-block">
                    <img id="Luke-photo" src="../assets/photo_1.jpg" />
                    <a target="_blank" href="cv_de_luke.pdf" download="" class="CV"><i class="fa fa-download"></i>Télécharger CV</a>
                    <div id="theme-options">
                        <div id="light-mode" class="dot"></div>
                        <div id="dark-mode" class="dot"></div>
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

.greeting h1{
    display: grid;
    text-align: center;
    align-content: center;
    border: 2px dashed lightcoral;
    min-height: 10em;
    color: var(--mainText);
    font-family: 'Nunito', sans-serif;
}

.intro {
    display: grid;
    background-color: white;
    border: 10px solid black;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    /* -webkit-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    -moz-box-shadow: -33px 23px 2px 2px rgba(0,0,0,1);
    box-shadow: -33px 23px 2px 2px rgba(0,0,0,1); */
}

@media screen and (max-width: 700px){
    .intro {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'left'
    'right';
    }

    .right-block{
        justify-content: center;
    }
}

.right-block {
    grid-area: right;
    display: grid;
    align-content: center;
    /* padding-top: 50px; */
    padding-bottom: 50px;
}

.right-block h1{
    text-align: left;
    margin-bottom: 80px;
    -webkit-transform: rotate(-10deg);
    font-family: 'Chewy', cursive;
    font-size: 40px;
}

#text {
    width: 300px;
    border: 1.5px solid black;
    background-color: rgb(0, 127, 255);
    padding: 15px;
    margin: 0 auto;
}


.left-block{
    grid-area: left;
    padding-top: 50px;
    padding-bottom: 50px;

}

#Luke-photo{
    display: block;
    margin: 0 auto; /*center image */
    height: 200px;
    width: 200px;
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
}

.CV:hover {
  background-color: RoyalBlue;
}


#theme-options{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.dot{
    height: 50px;
    width: 50px;
    background-color: white;
    border-radius: 50%;
    margin: 5px;
    border: 2px solid black;
    cursor: pointer;
}

.dot:hover{
    border-width: 5px;
}

#light-mode{
    background-color: white;
}

#dark-mode{
    background-color: black;
}
</style>
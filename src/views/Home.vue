<template>
    <section class="s1">
        <div class="main-container">
            <div class="message">
                <div class="greeting">
                    <h1 class="moi">Luke Jones</h1>
                    <h3>Etudiant en Informatique</h3>
                    <h2>Portfolio</h2>
                </div>
                <div class="cercle">
                    <div id="moncercle">
                        <div id="moncarre"></div>
                        <div id="montriangle"></div>
                        <div id="montriangle2"></div>
                        <div id="montriangle3"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.s1{
    overflow: auto;
    background-color: #1565c0;
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
.message{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    height: 600px;
    /* column-gap: 150px; */
}
.greeting{
    grid-area: right;
    display: grid;
}
.greeting .moi{
    display: grid;
    font-family: 'Kalam', cursive;
    padding-top: 200px;
    padding-left: 30px;
    font-size: 75px;
}

.cercle{
    grid-area: left;
    display: flex;
    justify-content: center;
}

#moncercle{ 
    background: #d9d9d9;;
	border-radius:150px;
	width:300px;
	height:300px;
    margin-top: 50px; 
    margin-left: -200px;
    /* opacity: 0.3; */
}

#moncarre{
    z-index: 4;
    position: absolute;
	background: #5271ff;
	width:250px;
	height:250px;
    margin-top: 230px;
    margin-left: 200px;
    opacity: 0.3;
}

#montriangle{
    z-index:3;
    position: absolute;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 300px solid #00c2cb;
    margin-top: 100px;
    opacity: 0.5;
}

#montriangle2{
    z-index: 1;
    position: absolute;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 300px solid #38b6ff;
    margin-top: 200px;
    opacity: 0.5;
}

#montriangle3{
    z-index: 2;
    position: absolute;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-bottom: 300px solid red;
    margin-top: 150px;
    margin-left: 75px;
    opacity: 0.5;
}


@media screen and (max-width: 900px){
    .message {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'left'
    'right';
    }
    .cercle{
        justify-content: center;
    }
}

</style>
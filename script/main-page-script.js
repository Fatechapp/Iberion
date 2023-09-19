@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
    --green-main: #33B08C;
    --green-accent: #CCDEA0;
    --blue-accent: #152547;
    --blue-light: #E6F2F7;
    --white: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

h1 {
    font-weight: 700;
    font-size: 2rem;
}

/*NAVBAR*/
nav {
    background: var(--green-main);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.35rem;
    padding-bottom: 0.25rem;
}
nav > div {
    margin: auto;
}

/*alert*/
.alert-danger {
    z-index: 200;
    position: fixed;
    width: 15rem;
    left: 0;
    right: 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    justify-content: center;
}

/*nav-left-side*/
.nav-left-side, .nav-right-side {
    margin-left: 3%;
    margin-right: 3%;
}
.nav-left-side img {
    height: 4.5rem;
    width: auto;
}

/*nav-mid-side*/
.nav-mid-side {
    margin-top: 1.45rem;
    font-size: 0.9rem;
}
.nav-mid-side ul{
    display: flex;
    gap: 2rem;
}
.nav-mid-side li{
    list-style: none;
}
.nav-mid-side a {
    color: var(--white);
    display: inline-block;
    text-decoration: none;
}
.nav-mid-side a:hover {
}
.nav-mid-side a::after{
    content: '';
    display: block;
    padding-bottom: 0.1rem;
    border-bottom: 0.1rem solid var(--white);
    transform: scaleX(0);
    transition: 0.15s linear;
}
.nav-mid-side a:hover::after {
    transform: scaleX(0.6);
}

/*nav-right-side*/
#toggle {
    position: relative;
    display: block;
    width: 2.5rem;
    height: 1.5rem;
    border-radius: 1.5rem;
    background: var(--white);
    transition: 0.5s;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5);
    cursor:pointer;
}
#toggle .indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--blue-accent);
    border-radius: 100%;
    transform: scale(1);
    transition: 0.5s;
}

/*HEADER*/
header {
    background: var(--green-main);
    height: 86.5vh;
}

/*header-mid*/
.header-mid {
    display: flex;
    justify-content: center;
}
.circle-500-left {
    position: absolute;
    height: 30rem;
    width: auto;
    left: 0;
    box-shadow: 0px 4px 4px 0px rgba(48, 48, 48, 0.50);
}
.Iberion-full-logo {
    position: absolute;
    top: 15rem;
    z-index: 10;
}
.circle-500-right {
    position: absolute;
    height: 30rem;
    width: auto;
    right: 0;
    box-shadow: 0px 4px 4px 0px rgba(48, 48, 48, 0.50);

}

/*header-bottom*/
.header-bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2.5rem;
    position: absolute;
    top: 30rem;
    right:0%;
    left:0%;
}

.header-bottom button {
    border-style: none;
    background: var(--white);
    color: var(--blue-accent);
    padding: 1.0rem 2rem;
    border-radius: 1.5rem;
    box-shadow: 0px 4px 4px 0px rgba(48, 48, 48, 0.50);
    cursor: pointer;
}

.header-bottom button:hover {
    color: var(--green-accent);
    background: var(--blue-accent);
    transition: 0.25s ease-in-out;
}

/*OVERVIEW*/
.overview {
    background: var(--blue-light);
    padding: 5.25rem 10%;
    color: var(--blue-accent);
}
.paragraf {
    display: inline-flex;
    justify-content: center;
    gap: 5rem;
}
.paragraf p {
    text-align: justify;
    max-width: 30rem;
}


/*Dark Mode*/

#toggle.active .indicator {
    background: var(--white);
    left: 1rem;
}
#toggle.active {
    background: var(--blue-accent);
}
body.active {

}

/*Media Queries*/

/*Tablet*/
@media (max-width: 850px) {
    html {
        font-size: 90.5%;
    }
    /*nav*/
    nav {
        background: var(--blue-accent);
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    /*nav-left-side*/
    .nav-left-side, .nav-right-side {
        margin-left: 1.6rem;
        margin-right: 1.6rem;
    }
    .nav-left-side img {
        height: 4.5rem;
        width: auto;
    }
}
@media (max-width: 500px) {
    /*nav*/
    nav {
        background: var(--blue-accent);
    }
}

/*Handphone*/
@media (max-width: 450px) {
    nav {
        background: var(--green-accent);
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
}

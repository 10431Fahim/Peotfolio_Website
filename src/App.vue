<template>
    <router-view></router-view>
</template>

<template>
    <v-app id="inspire">
        <v-app-bar app elevation="0">
            <v-subheader><h1 class="green--text">Portfolio<span class="pink--text">.in</span></h1></v-subheader>
            <v-tabs center-active right background-color="transparent"   active-class="active-tab">
                <v-tab ><a  class="con black--text  "href="#home" >Home</a></v-tab>
                <v-tab ><a class="con black--text " href="#about">About</a></v-tab>
                <v-tab ><a class="con black--text" href="#portfolio">Portfolio</a></v-tab>
                <v-tab ><a class="con black--text" href="#blog"> Blog</a></v-tab>
                <v-tab ><a class="con black--text" href="#Contact">Contact</a></v-tab>
            </v-tabs>
            <v-btn large color="green" class="white--text ml-10">Send me an Email</v-btn>
        </v-app-bar>
        <v-main style="background-color: #F5F5F5">
            <section class="intro-section" id="home">
                <v-row class="align-center px-10" style="height: 690px">
                    <v-col lg="6" cols="6" class="pa-6 font-weight-bold py-16"> 
                        <h2 class="display-3">I <span class="green--text">Am A</span><span class="pink--text"> Front-End</span> <span>Developer</span></h2>
                        <v-subheader>Hi, I am Fahim, i always love to learn new something.</v-subheader>
                        <br>
                        <br>
                        <a class="con" href="https://drive.google.com/uc?export=download&id=1mxNfEGbgyUelVlpbtooEHjlV133xlYoJ"><v-btn large elevation="5" color="green" class="white--text mt-10 px-10 py-5">Resume</v-btn></a>
                        <v-btn large elevation="5" color="pink"  class="white--text mt-10 ml-10 px-10 py-5"><a class="con" href="#Contact">Contact</a>
                        </v-btn>
                        <v-row class="mt-16">
                            <v-chip class="px-4 ma-3" color="primary">
                                <v-icon left size="20">mdi-facebook</v-icon>
                                Facebook
                            </v-chip>
                            <v-chip class="px-4 ma-3 white--text" color="#01ff56">
                                <v-icon left size="20">mdi-whatsapp</v-icon>
                                Whatsapp
                            </v-chip>
                            <v-chip class="px-4 ma-3" color="info">
                                <v-icon left size="20">mdi-linkedin</v-icon>
                                Linkedin
                            </v-chip>
                            <v-chip class="px-4 ma-3" color="dark">
                                <v-icon left size="20">mdi-github</v-icon>
                                Github
                            </v-chip>
                        </v-row>
                    </v-col>
                    <v-col lg="4" cols="4">
                        <v-img src="./assets/img22.png"></v-img>
                    </v-col>
                </v-row>
            </section>
            <section class="about-me" id="about">
                <v-img class="pa-10" height="400" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                       src="https://designshack.net/wp-content/uploads/Home-office.jpg">
                    <v-row justify="center" class="align-center">
                        <v-col lg="6" cols="6">
                            <v-card class="text-center pa-6 rounded-lg" color="#e1e0e0c9" elevation="5">
                                <v-card-subtitle class="green--text">ABOUT MYSELF</v-card-subtitle>
                                <v-card-text >
                                    Welcome to my pages! I’m a student of Computer Science and Engineering 
                                    at Daffodil International University.Knowledge of computer science is 
                                    the modern superpower and I would like to use it for the well-being of 
                                    the world. I am especially interested in helping people with technological 
                                    innovation, entrepreneurship and inspiring as many young students for computer 
                                    science as possible.
                                </v-card-text>
                                <v-btn large elevation="5" color="pink" class="white--text mt-10 px-10 py-5">Download
                                    Resume
                                    <v-icon>mdi-download</v-icon>
                                </v-btn>
                            </v-card>
                        </v-col>
                        
                    </v-row>
                </v-img>
            </section>
            <section class="educaion py-6">
                <v-container>
                    <h4 class="display-2 text-center">Education</h4>
                    <v-row class="py-8">
                        <v-col cols="12" lg="6">
                            <v-card class="pa-6 rounded-xl " elevation="5">
                                <div class="d-flex align-center justify-space-between">
                                    <div class="">
                                        <h2>Bachelor in Engineering(BEngg)</h2>
                                        <span>Pas.Year 2022</span>
                                    </div>
                                    <a class="green--text" href="https://daffodilvarsity.edu.bd/">(DIU)<v-icon color="green">mdi-link</v-icon></a>
                                </div>
                                <v-card-text>
                                    I have completed my bachelor degree from Daffodil International University With CPA 3.56.
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-card class="pa-6 rounded-xl " elevation="5">
                                <div class="d-flex align-center justify-space-between">
                                    <div class="">
                                        <h2>HSC</h2>
                                        <span>Pas.Year 2016</span>
                                    </div>
                                    <a class="green--text" href="https://www.cambrian.edu.bd/">Cambrian College<v-icon color="green">mdi-link</v-icon></a>
                                </div>
                                <v-card-text>
                                    I have completed my HSC from Dhaka Cambrian College With CPA 4.33.
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <v-card class="pa-6 rounded-xl " elevation="5">
                                <div class="d-flex align-center justify-space-between">
                                    <div class="">
                                        <h2>SSC</h2>
                                        <span>Pas.Year 2014</span>
                                    </div>
                                    <a class="green--text" href="https://mahishkundisecondaryschool.jessoreboard.gov.bd/">Mahishkundi Secondary School<v-icon color="green">mdi-link</v-icon></a>
                                </div>
                                <v-card-text>
                                    I have completed my HSC from Mahishkundi Secondary School With CPA 4.06.
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </section>
            <section class="experiance py-6">
                <v-img class="pa-10" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                       src="https://designshack.net/wp-content/uploads/Home-office.jpg">
                    <v-container>
                        <h4 class="display-2 text-center">Skills</h4>
                        <v-timeline>
                            <v-timeline-item v-for="(exper,index) in experience" :key="index"
                                             :color="index % 2 === 0 ?'pink':'green'">
                                <v-card class="rounded-xl">
                                    <v-card-title :color="index % 2 === 0 ?'pink':'green'">
                                        {{exper.title}}
                                    </v-card-title>
                                    <v-card-text>
                                        
                                        {{exper.decription}}
                                    </v-card-text>
                                </v-card>
                                
                            </v-timeline-item>
                        </v-timeline>
                    </v-container>
                </v-img>

            </section>
            <section class="portfolio">
                <h4 class="display-2 text-center">Portfolio</h4>
                <v-slide-group
                        class="pa-4"
                        active-class="success"
                        show-arrows
                >
                    <v-slide-item v-for="(slider,index) in sliders" :key="index">
                        <v-card height="250" width="250" class="mx-2">
                            <img height="100%" width="100%" :src="slider" alt="">
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </section>
            <section class="contact-us pt-10">
                <v-img class="pt-10" gradient="to bottom, rgb(166 199 156), rgb(227 227 227 / 86%)" src="https://img.freepik.com/free-photo/contact-us_36325-2135.jpg?size=626&ext=jpg">
                    <v-container>
                        <h4 class="display-1 text-center mb-5">
                            I am a person of thousand interests. I used to be a event photographer before coming to university and am still very interested in photography and film. I also enjoy playing the guitar, listening to music and doing sports (mainly football and cricket).
                        </h4>
                        <v-divider />
                        <br>
                        <v-row class="Contact" id="Contact">
                            <v-col cols="12" lg="6">
                                <v-card-title>Enter Your Message</v-card-title>
                                <v-form>
                                    <v-text-field label="Your Name" />
                                    <v-text-field label="Email" />
                                    <v-text-field label="Subject" />
                                    <v-textarea label="Message" />
                                    <v-btn large color="green" class="white--text">Send Message</v-btn>
                                </v-form>
                            </v-col>
                            <v-col cols="12" lg="3" offset="2">
                                <v-card-title>CONTACT ME</v-card-title>
                                <v-card-text>
                                    House-285, Road No-8/A, West Dhanmondi, Dhaka-1209<br>
                                    +880 1761606673<br>
                                    fahim15-10431@diu.edu.bd <br>
                                </v-card-text>
                                <v-card-actions>
                                    <a class="con" href="https://drive.google.com/uc?export=download&id=1mxNfEGbgyUelVlpbtooEHjlV133xlYoJ"><v-btn large elevation="5" color="pink" class="white--text mt-10 px-10 py-5">Download
                                        Resume
                                        <v-icon>mdi-download</v-icon>
                                    </v-btn></a>
                                </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-footer class="mt-4">
                        <v-col
                                class="text-center"
                                cols="12"
                        >
                            <strong>Copyright ©{{ new Date().getFullYear() }} All rights reserved | This is made by
                                <a href="" class="green--text">Md Fahim Ahmed</a>
                            </strong>
                        </v-col>
                    </v-footer>
                </v-img>
            </section>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        data: () => ({
            drawer: null,
            items: [
                {title: 'HTML', value: 100, color: 'light-blue'},
                {title: 'CSS', value: 100, color: 'deep-orange'},
                {title: 'Javascript', value: 50, color: 'light-green'},
                {title: 'Vuejs', value: 30, color: 'blue'},
                {title: 'Vuetify', value: 30, color: 'black'},
                {title: 'PHP', value: 30, color: 'red'},
            ],
            experience: [
                {
                    title: 'Software Skills',
                    
                    decription: 'Android Studio, CodeBlock, Pycharm,Netbin , MATHLAB, Cisco Packet Tracer'
                },
                {
                    title: 'Languages Skills',
                    
                    decription: 'C, HTML, CSS, JavaScript, React, Python, Assembly.'
                },
                {
                    title: 'Packages Skills',
                    
                    decription: 'MS World, MS Excel, MS Power Point.'
                },
                {
                    title: 'Packages Skills',
                    
                    decription: 'Windows 7,10, Linux.'
                },
            ],
            sliders:[
                'https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9-1520x800.png',
                'https://cdn.searchenginejournal.com/wp-content/uploads/2019/12/5-ways-seo-web-design-go-together-5e2945dd5df37.png',
                'https://data.whicdn.com/images/350420216/original.jpg?t=1605047796',
                'https://1zylgb20pxi7mw2sdr8i4a14-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/projectleft.jpg',
                'https://cdn.dribbble.com/users/702789/screenshots/14012516/media/561a8b7e8cbe51c72c18f4ef0dc72676.png?compress=1&resize=400x300',
                'https://cdn.dribbble.com/users/2399102/screenshots/15522177/media/346d890482d929610d316938e7d48629.png?compress=1&resize=400x300',
            ]
        }),
    }
</script>
<style>
    .con{
        text-decoration: none;
        color: #000;
    }
    .v-tab.active-tab {
        color: #e91e63;
    }

    .v-tab.active-tab::before {
        background-color: #4caf50;
    }
</style>
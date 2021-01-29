import { Carousel } from "./carousel.model";
import { Menu } from "./menu.model";
import { Usuario } from "./usuario.model";
/* BANCO TOPO */
export const CAROUSEL:Carousel[] =
[
    new Carousel("Gestante","Paola",
    "https://lh3.googleusercontent.com/pw/ACtC-3dRN-Uft0i8IaotXCZ9ci0AM2w2geeFSPQkQlqHjKLKOqD7RyTSVWAVVi7dcofb_PSWPMctDbmlo35Jt0Xv9-oppB_XUJv8kzMyvFgxtC8B3pJsSVTVjEaRYjAMMk9rx4PdC-4j7X4oyG4FCuSNBoXZ9w=w986-h657-no?authuser=0",
    "active","#",5,3),
    new Carousel("Quinze anos","Tamires",
    "https://lh3.googleusercontent.com/pw/ACtC-3fuRpNITHkxYQbADS9AjgoQwRBxzR1-_BTgFte3C-fdETYxKwE3u4GSjYhHtSxeEYEKzgnM8C4SPAElW9iYrl4-jOCojIrD7G_LZ2HZD_LCefYZseIHIv7fmhfvX-K7uk_8CwFSu29saVD-vgZvmCV1gQ=w986-h657-no?authuser=0",
    "","#",13,5),
    new Carousel("Ensaio Feminino","Yasmin",
    "https://lh3.googleusercontent.com/pw/ACtC-3d3qQHGvl37uO8eZ7iMLCTxqqfWwF6tG_-lZ4qAPBmfdOlrgAyTe3WWqpLC1niEgira7pLHi70dZpKzsnsl6_9gxMC1CHoEJdFOZdkWP93m06snxrcLJoPo1lMBjkh6w5iXjWpRUjqonGGyWi87AAJuzw=w986-h657-no?authuser=0",
    "","#",25,14)
]
export const ALBUM:Carousel[] =
[
    new Carousel("Ensaio Feminino","Ensaio Yasmin",
    "https://alfred.alboompro.com/crop/width/640/height/480/type/jpeg/url/storage.alboom.ninja/sites/17202/albuns/718057/img_2785.jpg?t=1601589593",
    "","#",30,1),
    new Carousel("Gestante","Ensaio Gestante Maisa",
    "https://alfred.alboompro.com/crop/width/640/height/480/type/jpeg/url/storage.alboom.ninja/sites/17202/albuns/718054/img_0407.jpg?t=1601589450",
    "","#",80,10),
    new Carousel("Quinze anos","Bruna",
    "https://alfred.alboompro.com/crop/width/640/height/480/type/jpeg/url/storage.alboom.ninja/sites/17202/albuns/710894/img_8254.jpg?t=1600266425",
    "","#",90,3),
    new Carousel("Ensaio Feminino","Larissa",
    "https://alfred.alboompro.com/crop/width/640/height/480/type/jpeg/url/storage.alboom.ninja/sites/17202/albuns/709907/img_9293.jpg?t=1600111155",
    "","#",50,13),
    new Carousel("Gestante","Ensaio Gestante Paola",
    "https://alfred.alboompro.com/crop/width/640/height/480/type/jpeg/url/storage.alboom.ninja/sites/17202/albuns/718066/img_4366.jpg?t=1601593914",
    "","#",25,88),
    new Carousel("Quinze anos","Ensaio Ynaiara",
    "https://alfred.alboompro.com/crop/width/640/height/480/type/jpeg/url/storage.alboom.ninja/sites/17202/albuns/709927/img_1114.jpg?t=1600112360",
    "","#",75,435)
]
export const MENU:Menu[] =
[
    new Menu("Home"),
    new Menu("Trabalhos"),
    new Menu("Galeria"),
    new Menu("Orçamento"),
    new Menu("Contato")
]
/* FIM BANCO TOPO */

/* INICIO BANCO CONTEUDO */
export const TELEFONE:string = "5515981285755"
/* FIM BANCO CONTEUDO */

/* INICIO BANCO LOGIN CLIENTE */
export const LOGIN:Usuario[] =
[
    new Usuario("admin","user@user.com","(00)00000000","admin"),
    new Usuario("Fernando","fernando@email.com","(15)981294904","Feeh@1993"),
    new Usuario("Luana","luana@email.com","(15)99815949","123")
]

/* FIM BANCO LOGIN CLIENTE */

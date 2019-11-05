const menuMobile = [
    { name: "Carpenter", link: "#", title: "Carpenter", class: "nav-link", isNew: "", default: false, _blank: false , imagePath: 'images/img1.png' },
    {name : "Interior Designer" , link: "#" , title: "Interior Designer" , class:"nav-link" , isNew: "" , default: false , _blank: false, imagePath: 'images/img1.png'},
    { name: "Vastu", link: "#", title: "Vastu", class: "nav-link", isNew: "", default: false, _blank: false ,imagePath: 'images/img1.png'},
    {name : "Contractor" , link: "#" , title: "Contractor" , class:"nav-link" , isNew: "" , default: false , _blank: false , imagePath: 'images/img1.png'},
    {name : "Civil Engineers" , link: "#" , title: "Civil Engineers" , class:"nav-link" , isNew: "" , default: false , _blank: false,imagePath: 'images/img1.png' }    
]
const menuDesktop = [
    { name: "Carpenter", link: "#", title: "Carpenter", class: "", isNew: "", default: false, _blank: false },
    { name : "Interior Designer" , link: "#" , title: "Interior Designer" , class:"" , isNew: "" , default: false , _blank: false },
    { name: "Vastu", link: "#", title: "Vastu", class: "", isNew: "", default: false, _blank: false },
    {name : "Contractor" , link: "#" , title: "Contractor" , class:"" , isNew: "" , default: false , _blank: false },
    {name : "Civil Engineers" , link: "#" , title: "Civil Engineers" , class:"" , isNew: "" , default: false , _blank: false }    
]
const FooterMenuMobile = [
    {title: "" , class:"nav-link home-tb" , pageName: "home"},
    {title: "" , class:"nav-link info-tb" , pageName: "info"},
    {title: "" , class:"nav-link heart-tb", pageName: "wishlist"},
    {title: "" , class:"nav-link prifle-tb" , pageName: "profile"},
]
const projectList = [
    {description: "This is test" , src:"images/img1.png" , alt: "home" , price: "5000" , url: "testing"},
    {description: "This is test" , src:"images/img1.png" , alt: "testing" , price: "5000", url: "testing"},
]

const blogList = [
    {description: "This is test" , src:"images/img1.png" , alt: "home" , price: "5000" , url: "testing"},
    {description: "This is test" , src:"images/img1.png" , alt: "testing" , price: "5000", url: "testing"},
]
export { menuMobile ,menuDesktop ,FooterMenuMobile , projectList , blogList};
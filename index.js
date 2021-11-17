let blogBoxs = document.querySelector('.blogBoxs');
class blog {
    constructor(class_,image, title, text) {
        this.class = class_;
        this.image = image;
        this.title = title;
        this.text = text;
    }
    createBlog(){
        let newBlog = document.createElement('div');
        newBlog.classList.add('blogBox');
        newBlog.classList.add('col-4');
        newBlog.classList.add(this.class);

        const blogContent =
            `<img src="${this.image}" alt="" srcset="" style="width:400px; height:270px">
            <h4>${this.title}</h4>
            <p>${this.text}</p>`;


        newBlog.innerHTML = blogContent;
        blogBoxs.appendChild(newBlog);
    }
}
const blog1 = new blog('bloom','img1.jpg' ,'head1', 'hello i\'m text1 hello i\'m text1 hello i\'m text1 hello i\'m text1');
blog1.createBlog();

const blog2 = new blog('nature','img2.jpg', 'head2', 'hello i\'m text2 hello i\'m text2 hello i\'m text2 hello i\'m text2');
blog2.createBlog();

const blog3 = new blog('nature','img3.jpg', 'head3', 'hello i\'m text3 hello i\'m text3 hello i\'m text3 hello i\'m text3');
blog3.createBlog();

// const allBlogs = document.querySelectorAll('.blogBox');
const allBlogs = [...blogBoxs.childNodes];
console.log(allBlogs);
const bloom = document.querySelector('.bloom');
console.log(bloom);

const allBtn = document.querySelector('.allBtn');
const bloomBtn = document.querySelector('.bloomBtn');
const natureBtn = document.querySelector('.natureBtn');

allBtn.addEventListener('click',allFilter);
bloomBtn.addEventListener('click',bloomFilter);
natureBtn.addEventListener('click',natureFilter);

function allFilter() {
    allBlogs.forEach((allblog) => {
        if (allblog.classList.contains('blogBox')) {
            allblog.style.display = 'block';
        }
    })
}

function bloomFilter() {
    allBlogs.forEach((allblog) => {
        if (!allblog.classList.contains('bloom')) {
            allblog.style.display = 'none';
        }else{
            allblog.style.display = 'block';
        }
    })
}

function natureFilter() {
    allBlogs.forEach((allblog) => {
        if (!allblog.classList.contains('nature')) {
            allblog.style.display = 'none';
        }else{
            allblog.style.display = 'block';
        }
    })
}











// const blogBoxs = document.querySelectorAll('.blogBox');
// const bloomBlogs = document.querySelectorAll('.bloom');
// const natureBlogs = document.querySelectorAll('.nature');

// const filterBtns = document.querySelectorAll('._btn');

// filterBtns.addEventListener('click',findFilter);
// function findFilter() {
//     filterBtns.forEach((filterBtn) => {
//         if (!filterBtn.classList.contains('.bloomBtn')) {
            
//         }
//     })
// }

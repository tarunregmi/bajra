const humberger = document.getElementById("humberger")
const aside = document.getElementById("aside");
const cross = document.getElementById("cross");
const projects = document.getElementById("projects");

const cards = [
    {
        thumbnail: 'scr_todo.png',
        title: 'Angular ToDo App',
        description: 'Simple todo app using Angular.',
        onlineLink: 'todo'
    },
    {
        thumbnail: 'scr_bug_on_a_wire.png',
        title: 'Bug On A Wire',
        description: 'Online bug on a game usign HTML, CSS and JavaScript.',
        onlineLink: 'bug_on_a_wire'
    },
    {
        thumbnail: 'scr_figma_to_web.png',
        title: 'Figma To WEB',
        description: 'Conversion of given figma design into a real website using HTML and CSS.',
        onlineLink: 'figma_to_web'
    },
    {
        thumbnail: 'scr_addressbook.png',
        title: 'Addressbook',
        description: 'Address shell scripting',
        onlineLink: ''
    },
];

function project(obj) {
    const li = document.createElement("li");
    li.classList = "project visible";
    const card = document.createElement("div");
    card.classList = "card";

    const thumbnail = document.createElement("img");
    thumbnail.src = `./assets/img/${obj.thumbnail}`;
    thumbnail.alt = obj.title;
    thumbnail.classList = "thumbnail";

    const description = document.createElement("div");
    description.classList = "description";
    const h3 = document.createElement("h3")
    h3.textContent = obj.title;
    const p = document.createElement("p");
    p.textContent = obj.description;
    description.appendChild(h3);
    description.append(p);

    const actions = document.createElement("div");
    actions.classList = "actions";
    const ap = document.createElement("a");
    ap.classList = "action-btn";
    ap.href = `/${obj.onlineLink}`;
    ap.target = "_blank";
    ap.textContent = "Preview";
    const as = document.createElement("a");
    as.classList = "action-btn";
    as.href = `https://git.bajratechnologies.com/tarunregmi/${obj.onlineLink}`;
    as.target = "_blank";
    as.textContent = "Source Code";
    actions.appendChild(ap);
    actions.appendChild(as);

    card.appendChild(thumbnail);
    card.appendChild(description);
    card.appendChild(actions);

    li.appendChild(card);
    projects.appendChild(li);
}

window.addEventListener("load", () => {
    document.getElementById('today').textContent = new Intl.DateTimeFormat('en-us', {dateStyle: 'full'}).format(new Date());
    cross.addEventListener("click", () => aside.classList.toggle("show"));
    
    cards.forEach(card => project(card));
});
// Single Responsibility Principle - Принцип Единой Ответственности

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }

    // toHTML() {
    //     return `
    //         <div class="news">
    //             <h1>${this.title}</h1>
    //             <p>${this.text}</p>
    //         </div>
    //     `;
    // }

    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 2);
    // }
}

// Ответственность класса - вывод новости в нужный формат
class NewsPrinter {
    constructor(news) {
        this.news = news
    }

    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `;
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2);
    }

    xml() {
        return `
            <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
            </news>
        `;
    }
}

// const news = new News('Putin', 'New constitution');

// console.log(news.toHTML());
// console.log(news.toJSON());

const printer = new NewsPrinter(
    new News('Putin', 'New constitution')
);

console.log(printer.html());
console.log(printer.json());
console.log(printer.xml());

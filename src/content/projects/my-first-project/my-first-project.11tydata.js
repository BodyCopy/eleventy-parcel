//you can use const puppers = require('./yourfile');
//top level data is exported at build time
//if you have varied data use a directory data file or front matter

const pageContent = {
    sectionOne : `
    <h1 class="content blog-heading section-heading">Disclaimer</h1>
    <div class='content body-copy'>
        <p class='body-text'>This case study is a work in progress. I'm in the process of building out a
            comprehensive version
            but it's not quite done yet. I've compiled screenshots of the final product but haven't had
            to chance to dive into the design reasoning.</p>
        <p class='body-text'>
            I'd recommend looking at the <a class="underline" href="/pages/gelaskins.html">GelaSkins</a>
            case study or the <a class="underline" href="/pages/notion-customizer.html">Notion
                Customization App</a> for a more in depth look at my approach. But if you just want to
            see some web design <a class="underline" href="#end-product">here</a> is the end product.
        </p>
    </div>
`
}



module.exports = ({
    pageContent
});

//the director tag or however you want to tag you template will create an accessable collection
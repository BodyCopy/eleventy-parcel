import { ConBlogHandler } from './con-blog-handler';

import { ConProgressBar } from './con-progress-bar';
import { ConFooter } from './con-footer';
import { ConImageGallery } from './con-image-gallery';
import { ConHighlight } from './con-highlight';

import { ConButton } from './con-button';
import { ConForm } from './con-form';
import { ConTextarea } from './con-textarea';
import { ConInputField } from './con-input-field';
import { ConToggleSwitch } from './con-toggle-switch';

import { ConFootnote } from './con-footnote';
import { ConCite } from './con-cite';

import { NewLit } from './con-new-lit';
import { ConNewList } from './con-new-list';

import { ConWordTyper } from './con-word-typer';
import { ConWordCounter } from './con-word-counter';
import { ConReadTimer } from './con-read-timer';
import { ConShadowBox } from './con-shadow-box';
 
customElements.define('con-blog-handler', ConBlogHandler);

customElements.define('con-progress-bar', ConProgressBar);
customElements.define('con-image-gallery', ConImageGallery);
customElements.define('con-footer', ConFooter);
customElements.define('con-button', ConButton);
customElements.define('con-form', ConForm);
customElements.define('con-textarea', ConTextarea);
customElements.define('con-toggle-switch', ConToggleSwitch);
customElements.define('con-footnote', ConFootnote);
customElements.define('con-cite', ConCite);
customElements.define('con-highlight', ConHighlight);
customElements.define('con-shadow-box', ConShadowBox);

customElements.define('con-word-typer', ConWordTyper);
customElements.define('con-word-counter', ConWordCounter);
customElements.define('con-read-timer', ConReadTimer);

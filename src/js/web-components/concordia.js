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
 
customElements.define('con-blog-handler', ConBlogHandler);

customElements.define('con-progress-bar', ConProgressBar);
customElements.define('con-image-gallery', ConImageGallery);
customElements.define('con-footer', ConFooter);
customElements.define('con-button', ConButton);
customElements.define('con-form', ConForm);
customElements.define('con-textarea', ConTextarea);
customElements.define('con-input-field', ConInputField);
customElements.define('con-toggle-switch', ConToggleSwitch);
customElements.define('con-footnote', ConFootnote);
customElements.define('con-cite', ConCite);
customElements.define('con-highlight', ConHighlight);
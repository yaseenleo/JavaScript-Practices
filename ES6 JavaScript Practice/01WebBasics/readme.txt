Document.anchors ||Read only
Returns a list of all of the anchors in the document.

Document.body
Returns the <body> or <frameset> node of the current document.

Document.characterSet ||Read only
Returns the character set being used by the document.

Document.compatMode  ||Read only
Indicates whether the document is rendered in quirks or strict mode.

Document.contentType  ||Read only
Returns the Content-Type from the MIME Header of the current document.

Document.doctype ||Read only
Returns the Document Type Definition (DTD) of the current document.

Document.documentElement ||Read only
Returns the Element that is a direct child of the document. For HTML documents, this is normally the HTMLHtmlElement object representing the document's <html> element.

Document.documentURI ||Read only
Returns the document location as a string.

Document.embeds ||Read only
Returns a list of the embedded <embed> elements within the current document.

Document.fonts
Returns the FontFaceSet interface of the current document.

Document.forms ||Read only
Returns a list of the <form> elements within the current document.

Document.head ||Read only
Returns the <head> element of the current document.

Document.hidden ||Read only
…
Document.images ||Read only
Returns a list of the images in the current document.

Document.implementation ||Read only
Returns the DOM implementation associated with the current document.

Document.lastStyleSheetSet ||Read only
Returns the name of the style sheet set that was last enabled. Has the value null until the style sheet is changed by setting the value of selectedStyleSheetSet.

Document.links ||Read only
Returns a list of all the hyperlinks in the document.

Document.mozSyntheticDocument 
Returns a Boolean that is true only if this document is synthetic, such as a standalone image, video, audio file, or the like.

Document.plugins ||Read only
Returns a list of the available plugins.

Document.featurePolicy  ||Read only
Returns the FeaturePolicy interface which provides a simple API for introspecting the feature policies applied to a specific document.

Document.preferredStyleSheetSet ||Read only
Returns the preferred style sheet set as specified by the page author.

Document.scripts ||Read only
Returns all the <script> elements on the document.

Document.scrollingElement ||Read only
Returns a reference to the Element that scrolls the document.

Document.selectedStyleSheetSet
Returns which style sheet set is currently in use.

Document.styleSheetSets ||Read only
Returns a list of the style sheet sets available on the document.

Document.timeline ||Read only
…

Document.undoManager  ||Read only
…

Document.visibilityState ||Read only
Returns a string denoting the visibility state of the document. Possible values are visible, hidden, prerender, and unloaded.

The Document interface is extended with the ParentNode interface:

ParentNode.childElementCount  ||Read only
Returns the number of children of this ParentNode which are elements.

ParentNode.children  ||Read only
Returns a live HTMLCollection containing all of the Element objects that are children of this ParentNode, omitting all of its non-element nodes.

ParentNode.firstElementChild  ||Read only
Returns the first node which is both a child of this ParentNode and is also an Element, or null if there is none.

ParentNode.lastElementChild  ||Read only
Returns the last node which is both a child of this ParentNode and is an Element, or null if there is none.

Document.cookie
Returns a semicolon-separated list of the cookies for that document or sets a single cookie.

Document.defaultView  || Read only
Returns a reference to the window object.

Document.designMode
Gets/sets the ability to edit the whole document.

Document.dir || Read only
Gets/sets directionality (rtl/ltr) of the document.

Document.domain
Gets/sets the domain of the current document.

Document.lastModified || Read only
Returns the date on which the document was last modified.

Document.location || Read only
Returns the URI of the current document.

Document.readyState || Read only
Returns loading status of the document.

Document.referrer || Read only
Returns the URI of the page that linked to this page.

Document.title
Sets or gets the title of the current document.

Document.URL || Read only
Returns the document location as a string.
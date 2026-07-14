# Savoré Restaurant Template

A modern, responsive restaurant website template built with HTML, CSS, JavaScript, and Bootstrap.

## Features

- Responsive design
- Customizable text
- Bootstrap Icons
- Mobile navigation
- Active navigation on scroll
- Smooth scrolling
- Editable menu items
- Reservation form
- Easy image replacement
- Easy to customize

## Folder Structure

```text
│
├── index.html
├── README.md
│
└── assets/
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── text.js
    │
    └── images/
        ├── logo.jpg
        ├── hero-image.jpg
        ├── about-image.jpg
        ├── menu-1.jpg
        ├── menu-2.jpg
        ├── menu-3.jpg
        ├── menu-4.jpg
        ├── gallery-1.jpg
        ├── gallery-2.jpg
        ├── gallery-3.jpg
        ├── gallery-4.jpg
        ├── gallery-5.jpg
        ├── client-1.jpg
        ├── client-2.jpg
        ├── client-3.jpg
        └── og-image.jpg

```

## Customization

### Change Text

Open:

```text
assets/js/text.js
```

You can edit:

- Website name
- Hero intro
- Hero description
- About section text
- About feature titles & descriptions
- Menu item names
- Menu descriptions
- Menu prices
- Gallery title
- Reservation phone number
- Reservation opening hours
- Footer opening hours
- Footer email
- Footer phone number
- Footer location

Simply replace the text inside the quotation marks.

Example:

```javascript
let websiteName = "SAVORÉ";
```

Only change **SAVORÉ**.

Do **not** change:

- Variable names
- Quotation marks
- JavaScript code below the editable section

---

### Change Images

Replace the images inside:

```text
assets/images
```

**Important**

- Keep the same filenames.
- Filenames are case-sensitive.
- Keep the same file extensions whenever possible.
- Use the recommended aspect ratios below for the best appearance.

|             Image             |        Recommended Aspect Ratio      |
|-------------------------------|--------------------------------------|
| logo.jpg                      |                 1:1                  |
| hero-image.jpg                |                 1:1                  |
| about-image.jpg               |                 5:4                  |
| menu-1.jpg – menu-4.jpg       |                 1:1                  |
| gallery-1.jpg – gallery-4.jpg |                 4:3                  |
| client-1.jpg – client-3.jpg   |                 1:1                  |

## Technologies

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

## License

Free to use for personal and commercial projects.
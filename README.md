<p align="center">
  <a href="http://arifszn.github.io/gitprofile" target="_blank">
    <img src="https://arifszn.github.io/assets/img/hosted/gitprofile/logo.png" alt="GitProfile" title="GitProfile" width="50">
  </a>
</p>

<h1 align="center">GitProfile</h1>
<p align="center">A modern, responsive and customizable portfolio builder for Developers!</p>
<p align="center">https://arifszn.github.io/gitprofile</p>

<br/>

<p align="center">
  <a href="https://arifszn.github.io/gitprofile">
      <img src="https://arifszn.github.io/assets/img/hosted/gitprofile/preview.gif" width="60%" alt="Preview"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="60%" alt="Shadow"/></a>
</p>

**GitProfile** is an easy-to-customize personal dev portfolio builder that is created with React.js. When you manage the code in a GitHub repository, it will automatically render a webpage with the owner's profile information, including a photo, bio, and public repositories. Also, it includes space to highlight your details, job history, education history, skills, and recent blog posts.

It's all possible using [GitHub API](https://developer.github.com/v3/) (for automatically populating your website with content) and [Article-api](https://github.com/arifszn/article-api) (for fetching recent blog posts).

✓ [30 Themes](#themes)\
✓ [Google Analytics](#google-analytics)\
✓ [Hotjar](#hotjar)\
✓ [Meta Tags](#meta-tags)\
✓ [Avatar and Bio](#avatar-and-bio)\
✓ [Social Links](#social-links)\
✓ [Skills](#skills)\
✓ [Experience](#experience)\
✓ [Education](#education)\
✓ [Projects](#projects)\
✓ [Blog Posts](#blog-posts)

To view a live example, **[click here](https://arifszn.github.io/gitprofile)**.

## 🛠 Installation & Set Up

These instructions will get you a copy of the project and deploy your website online!

- **[Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)** the repo so you have your own project to customize by clicking the fork icon on the top right side. A "fork" is a copy of a repository.
- Rename your forked repository to `username.github.io` in github, where `username` is your GitHub username (or organization name).
- Go to your repo's **Actions** page and enable workflows.

  ![Workflows](https://arifszn.github.io/assets/img/hosted/gitprofile/workflows.png)

- Open `vite.config.js`, and change `base`'s value.

  - If you are deploying to `https://<USERNAME>.github.io/`, set `base` to `'/'`.

  - If you are deploying to `https://<USERNAME>.github.io/<REPO>/`, for example your repository is at `https://github.com/<USERNAME>/<REPO>`, then set `base` to `'/<REPO>/'`.

  ```js
  // vite.config.js
  {
    base: '/',
    // ...
  }
  ```

- Now commit to your **main** branch with your changes.
- The CI/CD pipeline will publish your page at the gh-pages branch automatically.
- Go to your repo's **Settings** -> **Pages** -> **Source** and change the branch to gh-pages and click **save**.
- Your personal portfolio will be live at `username.github.io`.
- Any time you commit a change to the **main** branch, the website will be automatically updated.

If you see only `README` at `username.github.io`, be sure to change your GitHub Page's source to `gh-pages` branch. See [how to](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Also, if you face any issue rendering the website, double-check the `base` value in the `vite.config.js`.

As this is a vite project, you can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://vitejs.dev/guide/static-deploy.html) for a detailed deployment guide to other services.

## 🎨 Customization

All the magic happens in the file `gitprofile.config.js`. Open it and modify it according to your preference.

These are the default values:

<details>
<summary>gitprofile.config.js</summary>

```js
// gitprofile.config.js
const config = {
  github: {
    username: 'arifszn', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    devto: '',
    website: '',
    phone: '',
    email: '',
  },
  skills: ['JavaScript', 'React.js'],
  experiences: [
    {
      company: 'Company name 1',
      position: 'Software Engineer',
      from: 'July 2019',
      to: 'Present',
    },
    {
      company: 'Company name 2',
      position: 'Jr. Software Engineer',
      from: 'January 2019',
      to: ' June 2019',
    },
  ],
  education: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
  blog: {
    // Display blog posts from your medium or dev.to account. (Optional)
    source: 'dev.to', // medium | dev.to
    username: 'arifszn',
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id
    id: '', // UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    default: 'light',

    // Hides the theme change switch
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should we use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded default
    respectPrefersColorScheme: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      procyon: {
        primary: '#fc055b',
        secondary: '#219aaf',
        accent: '#e8d03a',
        neutral: '#2A2730',
        'base-100': '#E3E3ED',
        '--rounded-box': '3rem',
      },
    },
  },
};
```

</details>

### Themes

There are 30 themes available that can be selected from the dropdown.

The default theme can be specified.

```js
// gitprofile.config.js
module.exports = {
  // ...
  themeConfig: {
    default: 'light',
    // ...
  },
};
```

You can create your own custom theme by modifying these values:

```js
// gitprofile.config.js
module.exports = {
  // ...
  themeConfig: {
    customTheme: {
      procyon: {
        primary: '#fc055b',
        secondary: '#219aaf',
        accent: '#e8d03a',
        neutral: '#2A2730',
        'base-100': '#E3E3ED',
        '--rounded-box': '3rem',
      },
    },
    // ...
  },
};
```

![Theme Dropdown](https://arifszn.github.io/assets/img/hosted/gitprofile/themes-1.png)

Here are some screenshots of different themes.\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/gitprofile/themes-2.png)\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/gitprofile/themes-6.png)\
<br/>
![Themes](https://arifszn.github.io/assets/img/hosted/gitprofile/themes-7.png)

### Google Analytics

ezFolio supports both GA3 and GA4. If you do not want to use Google Analytics, keep the `id` empty.

```js
// gitprofile.config.js
module.exports = {
  // ...
  googleAnalytics: {
    id: '',
  },
};
```

Besides tracking visitors, ezFolio will track click events on projects and blog posts, and send them to Google Analytics.\
<br/>
![Event](https://www.arifszn.com/assets/img/hosted/gitprofile/event.png)

### Hotjar

GitProfile supports hotjar. If you do not want to use Hotjar, keep the `id` empty.

```js
// gitprofile.config.js
module.exports = {
  // ...
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
};
```

### Meta Tags

Meta tags will be auto-generated from configs dynamically. However, you can also manually add meta tags in `public\index.html`.

### Avatar and Bio

Your github avatar and bio will be displayed here.\
<br/>
![Avatar Bio](https://arifszn.github.io/assets/img/hosted/gitprofile/avatar-card.png)

### Social Links

GitProfile supports linking your social media services you're using, including LinkedIn, Twitter, Facebook, Dribbble, Behance, Medium, dev.to, personal website, phone and email.

```js
// gitprofile.config.js
module.exports = {
  // ...
  social: {
    linkedin: 'ariful-alam',
    twitter: 'arif_swozon',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    devto: '',
    website: 'https://arifszn.github.io',
    phone: '',
    email: '',
  },
};
```

### Skills

To showcase your skills provide them here.

```js
// gitprofile.config.js
module.exports = {
  // ...
  skills: ['JavaScript', 'React.js'],
};
```

Empty array will hide the skills section.

### Experience

Provide your job history in `experiences`.

```js
// gitprofile.config.js
module.exports = {
  // ...
  experiences: [
    {
      company: 'Company name 1',
      position: 'Software Engineer',
      from: 'July 2019',
      to: 'Present',
    },
    {
      company: 'Company name 2',
      position: 'Jr. Software Engineer',
      from: 'January 2019',
      to: ' June 2019',
    },
  ],
};
```

Empty array will hide the experience section.

### Education

Provide your education history in `education`.

```js
// gitprofile.config.js
module.exports = {
  // ...
  education: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
};
```

Empty array will hide the education section.

### Projects

Your public repo from github will be displayed here automatically. You can limit how many projects do you want to be displayed. Also, you can hide forked or specific repo.

```js
// gitprofile.config.js
module.exports = {
  // ...
  github: {
    username: 'arifszn',
    sortBy: 'stars',
    limit: 8,
    exclude: {
      forks: false,
      projects: ['my-project1', 'my-project2'],
    },
  },
};
```

### Blog Posts

If you have [medium](https://medium.com) or [dev.to](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev.to username. You can limit how many posts to display (Max is `10`).

```js
// gitprofile.config.js
module.exports = {
  // ...
  blog: {
    source: 'dev.to',
    username: 'arifszn',
    limit: 5,
  },
};
```

![Blog](https://arifszn.github.io/assets/img/hosted/gitprofile/blog.png)

The posts are fetched by [Article-api](https://github.com/arifszn/article-api).

## 📢 Please Read

I intend to keep my works open source. Please do not discourage me by claiming this work by copying it as your own. However, You are open to use this project by forking it and change any code necessary by giving attribute to the original author. Please see this [issue](https://github.com/arifszn/gitprofile/issues/11) for more info.

## 💖 Support

<a href="https://www.buymeacoffee.com/arifszn" target="_blank">
  <img src="https://raw.githubusercontent.com/arifszn/arifszn/main/assets/bmc-button.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

## 💡 Contribute

To contribute, see the [Contributing guide](https://github.com/arifszn/gitprofile/blob/main/CONTRIBUTING.md).

## 📄 License

**GitProfile** is licensed under the [Apache-2.0 License](https://github.com/arifszn/gitprofile/blob/main/LICENSE).

const icons = [
  {
    name: "X",
    category: "technology",
    classes: ["ci ci-x", "ci ci-x-light"],
    url: "x.com",
  },
  {
    name: "PhonePe",
    category: "financial services",
    classes: ["ci ci-phonepe", "ci ci-phonepe-horizontal"],
    url: "phonepe.com",
  },
  {
    name: "stripe",
    category: "financial services",
    classes: ["ci ci-stripe", "ci ci-stripe-wordmark"],
    url: "stripe.com",
  },
  {
    name: "Razorpay",
    category: "financial services",
    classes: ["ci ci-razorpay", "ci ci-razorpay-horizontal"],
    url: "razorpay.com",
  },
  {
    name: "Paypal",
    category: "financial services",
    classes: ["ci ci-paypal", "ci ci-paypal-horizontal"],
    url: "paypal.com",
  },
  {
    name: "paytm",
    category: "financial services",
    classes: ["ci ci-paytm", "ci ci-paytm-wordmark"],
    url: "paytm.com",
  },
  {
    name: "Payoneer",
    category: "financial services",
    classes: [
      "ci ci-payoneer",
      "ci ci-payoneer-horizontal",
      "ci ci-payoneer-horizontal-light",
      "ci ci-payoneer-vertical",
      "ci ci-payoneer-vertical-light",
    ],
    url: "payoneer.com",
  },
  {
    name: "Visa",
    category: "financial services",
    classes: ["ci ci-visa", "ci ci-visa-wordmark"],
    url: "visa.com",
  },
  {
    name: "Mastercard",
    category: "financial services",
    classes: ["ci ci-mastercard"],
    url: "mastercard.com",
  },
  {
    name: "buy me a coffee",
    category: "financial services",
    classes: ["ci ci-buymeacoffee"],
    url: "buymeacoffee.com",
  },
  {
    name: "Domino's",
    category: "food and beverage",
    classes: ["ci ci-dominos", "ci ci-dominos-horizontal"],
    url: "dominos.com",
  },
  {
    name: "KFC",
    category: "food and beverage",
    classes: ["ci ci-kfc", "ci ci-kfc-wordmark"],
    url: "kfc.com",
  },
  {
    name: "McDonald's",
    category: "food and beverage",
    classes: ["ci ci-mcdonalds"],
    url: "mcdonalds.com",
  },
  {
    name: "Burger King",
    category: "food and beverage",
    classes: ["ci ci-burgerking"],
    url: "burgerking.com",
  },
  {
    name: "Nestlè",
    category: "food and beverage",
    classes: ["ci ci-nestle", "ci ci-nestle-vertical"],
    url: "nestle.com",
  },
  {
    name: "Wendy's",
    category: "food and beverage",
    classes: ["ci ci-wendys"],
    url: "wendys.com",
  },
  {
    name: "Booking.com",
    category: "travel and tourism",
    classes: ["ci ci-booking", "ci ci-booking-wordmark"],
    url: "booking.com",
  },
  {
    name: "Olacabs",
    category: "travel and tourism",
    classes: ["ci ci-ola", "ci ci-ola-wordmark"],
    url: "olacabs.com",
  },
  {
    name: "Uber",
    category: "travel and tourism",
    classes: ["ci ci-uber", "ci ci-uber-wordmark"],
    url: "uber.com",
  },
  {
    name: "Virgin",
    category: "travel and tourism",
    classes: ["ci ci-virgin"],
    url: "virgin.com",
  },
  {
    name: "Expedia",
    category: "travel and tourism",
    classes: ["ci ci-expedia", "ci ci-expedia-horizontal"],
    url: "expedia.com",
  },
  {
    name: "Hotels.com",
    category: "travel and tourism",
    classes: ["ci ci-hotels", "ci ci-hotels-horizontal"],
    url: "hotels.com",
  },
  {
    name: "Audi",
    category: "automobile",
    classes: ["ci ci-audi", "ci ci-audi-light"],
    url: "audi.com",
  },

  {
    name: "Porsche",
    category: "automobile",
    classes: ["ci ci-porsche", "ci ci-porsche-vertical"],
    url: "porsche.com",
  },
  {
    name: "BMW",
    category: "automobile",
    classes: ["ci ci-bmw"],
    url: "bmw.com",
  },
  {
    name: "Land Rover",
    category: "automobile",
    classes: ["ci ci-landrover"],
    url: "landrover.com",
  },
  {
    name: "Lamborghini",
    category: "automobile",
    classes: ["ci ci-lamborghini"],
    url: "lamborghini.com",
  },
  {
    name: "Mercedes Benz",
    category: "automobile",
    classes: [
      "ci ci-mercedes",
      "ci ci-mercedes-vertical",
      "ci ci-mercedes-vertical-light",
    ],
    url: "mercedes.com",
  },
  {
    name: "Spotify",
    category: "art and music",
    classes: [
      "ci ci-spotify",
      "ci ci-spotify-horizontal",
      "ci ci-spotify2-horizontal",
    ],
    url: "spotify.com",
  },
  {
    name: "Nike",
    category: "clothing and apparel",
    classes: ["ci ci-nike", "ci ci-nike-light"],
    url: "nike.com",
  },
  {
    name: "Zara",
    category: "clothing and apparel",
    classes: [
      "ci ci-zara",
      "ci ci-zara-light",
      "ci ci-zara-wordmark",
      "ci ci-zara-wordmark-light",
    ],
    url: "zara.com",
  },
  {
    name: "Puma",
    category: "clothing and apparel",
    classes: [
      "ci ci-puma",
      "ci ci-puma-light",
      "ci ci-puma-horizontal",
      "ci ci-puma-horizontal-light",
    ],
    url: "puma.com",
  },

  {
    name: "H&M",
    category: "clothing and apparel",
    classes: ["ci ci-hm"],
    url: "hm.com",
  },
  {
    name: "Balenciaga",
    category: "clothing and apparel",
    classes: ["ci ci-balenciaga", "ci ci-balenciaga-wordmark"],
    url: "balenciaga.com",
  },
  {
    name: "GUCCI",
    category: "clothing and apparel",
    classes: [
      "ci ci-gucci",
      "ci ci-gucci-light",
      "ci ci-gucci-wordmark",
      "ci ci-gucci-wordmark-light",
    ],
    url: "gucci.com",
  },
  {
    name: "PRADA",
    category: "clothing and apparel",
    classes: [
      "ci ci-prada",
      "ci ci-prada-light",
      "ci ci-prada-wordmark",
      "ci ci-prada-wordmark-light",
    ],
    url: "prada.com",
  },
  {
    name: "FENDI",
    category: "clothing and apparel",
    classes: [
      "ci ci-fendi",
      "ci ci-fendi-light",
      "ci ci-fendi-wordmark",
      "ci ci-fendi-wordmark-light",
    ],
    url: "fendi.com",
  },
  {
    name: "Louis Vuitton",
    category: "clothing and apparel",
    classes: [
      "ci ci-lv",
      "ci ci-lv-light",
      "ci ci-lv-wordmark",
      "ci ci-lv-wordmark-light",
    ],
    url: "louisvuitton.com",
  },
  {
    name: "Ray-Ban",
    category: "clothing and apparel",
    classes: ["ci ci-rayban", "ci ci-rayban-wordmark"],
    url: "rayban.com",
  },
  {
    name: "practo",
    category: "pharmaceuticals",
    classes: ["ci ci-practo", "ci ci-practo-wordmark"],
    url: "practo.com",
  },
  {
    name: "Instagram",
    category: "technology",
    classes: ["ci ci-instagram"],
    url: "instagram.com",
  },
  {
    name: "Linkedin",
    category: "technology",
    classes: ["ci ci-linkedin", "ci ci-linkedin-horizontal"],
    url: "linkedin.com",
  },
  {
    name: "Gmail",
    category: "technology",
    classes: ["ci ci-gmail", "ci ci-gmail-horizontal"],
    url: "gmail.com",
  },
  {
    name: "Leetcode",
    category: "technology",
    classes: ["ci ci-leetcode", "ci ci-leetcode-light"],
    url: "leetcode.com",
  },
  {
    name: "Github",
    category: "technology",
    classes: [
      "ci ci-github",
      "ci ci-github-light",
      "ci ci-github-wordmark",
      "ci ci-github-wordmark-light",
    ],
    url: "github.com",
  },
  {
    name: "Git",
    category: "technology",
    classes: ["ci ci-git", "ci ci-git-horizontal"],
    url: "git.com",
  },
  {
    name: "Dribbble",
    category: "art and music",
    classes: [
      "ci ci-dribbble",
      "ci ci-dribbble-wordmark",
      "ci ci-dribbble-wordmark-light",
      "ci ci-dribbble2",
    ],
    url: "dribbble.com",
  },
  {
    name: "HSBC",
    category: "financial services",
    classes: [
      "ci ci-hsbc",
      "ci ci-hsbc-horizontal",
      "ci ci-hsbc-horizontal-light",
    ],
    url: "hsbc.com",
  },
  {
    name: "Barclays",
    category: "financial services",
    classes: ["ci ci-barclays", "ci ci-barclays-wordmark"],
    url: "barclays.com",
  },
  {
    name: "Adidas",
    category: "clothing and apparel",
    classes: [
      "ci ci-adidas",
      "ci ci-adidas-light",
      "ci ci-adidas-wordmark",
      "ci ci-adidas-vertical",
      "ci ci-adidas-vertical-light",
    ],
    url: "adidas.com",
  },

  {
    name: "Airbnb",
    category: "travel and tourism",
    classes: ["ci ci-airbnb", "ci ci-airbnb-circle", "ci ci-airbnb-horizontal"],
    url: "airbnb.com",
  },
  {
    name: "Tesla",
    category: "automobile",
    classes: ["ci ci-tesla", "ci ci-tesla-square", "ci ci-tesla-wordmark"],
    url: "tesla.com",
  },
  {
    name: "Starbucks",
    category: "food and beverage",
    classes: ["ci ci-starbucks", "ci ci-starbucks-wordmark ci-6x"],
    url: "starbucks.com",
  },
  {
    name: "Whatsapp",
    category: "technology",
    classes: [
      "ci ci-whatsapp",
      "ci ci-whatsapp-horizontal",
      "ci ci-whatsapp-vertical",
      "ci ci-whatsapp2",
      "ci ci-whatsapp2-horizontal",
      "ci ci-whatsapp2-vertical",
    ],
    url: "whatsapp.com",
  },
  {
    name: "Youtube",
    category: "technology",
    classes: ["ci ci-youtube", "ci ci-youtube-horizontal"],
    url: "youtube.com",
  },
  {
    name: "Discord",
    category: "technology",
    classes: ["ci ci-discord", "ci ci-discord-horizontal"],
    url: "discord.com",
  },
  {
    name: "Facebook",
    category: "technology",
    classes: ["ci ci-facebook", "ci ci-facebook-wordmark"],
    url: "facebook.com",
  },
  {
    name: "Reddit",
    category: "technology",
    classes: [
      "ci ci-reddit",
      "ci ci-reddit-horizontal",
      "ci ci-reddit-horizontal-light",
      "ci ci-reddit2-horizontal-light",
    ],
    url: "reddit.com",
  },
  {
    name: "Snapchat",
    category: "technology",
    classes: ["ci ci-snapchat"],
    url: "snapchat.com",
  },
  {
    name: "Twitch",
    category: "technology",
    classes: ["ci ci-twitch", "ci ci-twitch-wordmark"],
    url: "twitch.com",
  },
  {
    name: "Alan",
    category: "technology",
    classes: ["ci ci-alan", "ci ci-alan-horizontal", "ci ci-alan-vertical"],
    url: "alan.com",
  },
  {
    name: "Telegram",
    category: "technology",
    classes: ["ci ci-telegram", "ci ci-telegram2"],
    url: "telegram.com",
  },
  {
    name: "Tiktok",
    category: "technology",
    classes: [
      "ci ci-tiktok",
      "ci ci-tiktok-circle",
      "ci ci-tiktok-circle-light",
      "ci ci-tiktok-horizontal",
      "ci ci-tiktok-horizontal-light",
      "ci ci-tiktok-light",
      "ci ci-tiktok-rounded-square",
      "ci ci-tiktok-rounded-square-light",
      "ci ci-tiktok-square",
      "ci ci-tiktok-square-light",
      "ci ci-tiktok-vertical",
      "ci ci-tiktok-vertical-light",
    ],
    url: "tiktok.com",
  },
  {
    name: "OpenSea",
    category: "technology",
    classes: [
      "ci ci-opensea",
      "ci ci-opensea-horizontal",
      "ci ci-opensea2",
      "ci ci-opensea2-horizontal",
      "ci ci-opensea3",
    ],
    url: "opensea.com",
  },
  {
    name: "Johnson & Johnson",
    category: "pharmaceuticals",
    classes: ["ci ci-jnj", "ci ci-jnj-wordmark"],
    url: "jnj.com",
  },
  {
    name: "Novartis",
    category: "pharmaceuticals",
    classes: ["ci ci-novartis", "ci ci-novartis-horizontal"],
    url: "novartis.com",
  },
  {
    name: "Roche",
    category: "pharmaceuticals",
    classes: ["ci ci-roche", "ci ci-roche-wordmark"],
    url: "roche.com",
  },
  {
    name: "Sanofi",
    category: "pharmaceuticals",
    classes: ["ci ci-sanofi", "ci ci-sanofi-wordmark"],
    url: "sanofi.com",
  },
  {
    name: "Merck",
    category: "pharmaceuticals",
    classes: ["ci ci-merck", "ci ci-merck-horizontal"],
    url: "merck.com",
  },
  {
    name: "AstraZeneca",
    category: "pharmaceuticals",
    classes: ["ci ci-astrazeneca", "ci ci-astrazeneca-horizontal"],
    url: "astrazeneca.com",
  },
  {
    name: "Amazon",
    category: "technology",
    classes: [
      "ci ci-amazon",
      "ci ci-amazon-vertical",
      "ci ci-amazon-vertical-light",
    ],
    url: "amazon.com",
  },
  {
    name: "Angular",
    category: "technology",
    classes: ["ci ci-angular"],
    url: "angular.com",
  },
  {
    name: "Apple",
    category: "technology",
    classes: ["ci ci-apple"],
    url: "apple.com",
  },
  {
    name: "Artstation",
    category: "art and music",
    classes: [
      "ci ci-artstation",
      "ci ci-artstation-horizontal",
      "ci ci-artstation-horizontal-light",
      "ci ci-artstation-vertical",
      "ci ci-artstation-vertical-light",
    ],
    url: "artstation.com",
  },
  {
    name: "aws",
    category: "technology",
    classes: ["ci ci-aws", "ci ci-aws-light"],
    url: "aws.com",
  },
  {
    name: "Azure",
    category: "technology",
    classes: ["ci ci-azure", "ci ci-azure2"],
    url: "azure.com",
  },
  {
    name: "Bandcamp",
    category: "art and music",
    classes: [
      "ci ci-bandcamp",
      "ci ci-bandcamp-horizontal",
      "ci ci-bandcamp-horizontal-light",
      "ci ci-bandcamp2-horizontal",
      "ci ci-bandcamp2-horizontal-light",
    ],
    url: "bandcamp.com",
  },
  {
    name: "Behance",
    category: "art and music",
    classes: ["ci ci-behance", "ci ci-behance-wordmark", "ci ci-behance2"],
    url: "behance.com",
  },
  {
    name: "Bootstrap",
    category: "technology",
    classes: ["ci ci-bootstrap"],
    url: "bootstrap.com",
  },
  {
    name: "Cashfree",
    category: "financial services",
    classes: [
      "ci ci-cashfree",
      "ci ci-cashfree-horizontal",
      "ci ci-cashfree-horizontal-light",
    ],
    url: "cashfree.com",
  },
  {
    name: "CSS",
    category: "technology",
    classes: ["ci ci-css"],
    url: "css.com",
  },
  {
    name: "Deviantart",
    category: "art and music",
    classes: [
      "ci ci-deviantart",
      "ci ci-deviantart-horizontal",
      "ci ci-deviantart2",
    ],
    url: "deviantart.com",
  },
  {
    name: "Django",
    category: "technology",
    classes: ["ci ci-django", "ci ci-django-wordmark"],
    url: "django.com",
  },
  {
    name: "DigitalOcean",
    category: "technology",
    classes: ["ci ci-do", "ci ci-do-horizontal", "ci ci-do-vertical"],
    url: "digitalocean.com",
  },
  {
    name: "Docker",
    category: "technology",
    classes: [
      "ci ci-docker",
      "ci ci-docker-horizontal",
      "ci ci-docker-vertical",
    ],
    url: "docker.com",
  },
  {
    name: "Eth",
    category: "technology",
    classes: ["ci ci-eth"],
    url: "eth.com",
  },
  {
    name: "Figma",
    category: "technology",
    classes: ["ci ci-figma"],
    url: "figma.com",
  },
  {
    name: "Firebase",
    category: "technology",
    classes: ["ci ci-firebase"],
    url: "firebase.com",
  },
  {
    name: "Flutter",
    category: "technology",
    classes: ["ci ci-flutter"],
    url: "flutter.com",
  },
  {
    name: "Framer",
    category: "technology",
    classes: ["ci ci-framer-motion"],
    url: "framer.com",
  },
  {
    name: "Gcd",
    category: "technology",
    classes: ["ci ci-gcd"],
    url: "gcd.com",
  },
  {
    name: "Google",
    category: "technology",
    classes: ["ci ci-google", "ci ci-google-wordmark"],
    url: "google.com",
  },
  {
    name: "Graphql",
    category: "technology",
    classes: [
      "ci ci-graphql",
      "ci ci-graphql-horizontal",
      "ci ci-graphql-vertical",
    ],
    url: "graphql.com",
  },
  {
    name: "Swift",
    category: "technology",
    classes: ["ci ci-swift", "ci ci-swift-horizontal"],
    url: "swift.org",
  },
  {
    name: "Ruby",
    category: "technology",
    classes: ["ci ci-ruby"],
    url: "ruby-lang.org",
  },
  {
    name: "Scala",
    category: "technology",
    classes: ["ci ci-scala", "ci ci-scala-horizontal"],
    url: "scala-lang.org",
  },
  {
    name: "HTML5",
    category: "technology",
    classes: ["ci ci-html"],
    url: "html.com",
  },
  {
    name: "Infura",
    category: "technology",
    classes: ["ci ci-infura", "ci ci-infura-vertical", "ci ci-infura-wordmark"],
    url: "infura.com",
  },
  {
    name: "Java",
    category: "technology",
    classes: ["ci ci-java", "ci ci-java-vertical"],
    url: "java.com",
  },
  {
    name: "C",
    category: "technology",
    classes: ["ci ci-c"],
    url: "learn-c.org",
  },
  {
    name: "C++",
    category: "technology",
    classes: ["ci ci-cpp"],
    url: "isocpp.org",
  },
  {
    name: "C#",
    category: "technology",
    classes: ["ci ci-csharp"],
    url: "csharp.com",
  },
  {
    name: "Julia",
    category: "technology",
    classes: ["ci ci-julia", "ci ci-julia-wordmark"],
    url: "julialang.org",
  },
  {
    name: "Go",
    category: "technology",
    classes: ["ci ci-go", "ci ci-go-wordmark"],
    url: "golang.org",
  },
  {
    name: "PHP",
    category: "technology",
    classes: ["ci ci-php", "ci ci-php-wordmark", "ci ci-php-wordmark-light"],
    url: "php.net",
  },
  {
    name: "Kotlin",
    category: "technology",
    classes: ["ci ci-kotlin", "ci ci-kotlin-wordmark"],
    url: "kotlinlang.org",
  },
  {
    name: "Rust",
    category: "technology",
    classes: ["ci ci-rust"],
    url: "rust-lang.org",
  },
  {
    name: "R",
    category: "technology",
    classes: ["ci ci-r"],
    url: "r-project.org",
  },
  {
    name: "Perl",
    category: "technology",
    classes: ["ci ci-perl"],
    url: "perl.org",
  },
  {
    name: "JavaScript",
    category: "technology",
    classes: ["ci ci-js"],
    url: "javascript.com",
  },
  {
    name: "Kubernetes",
    category: "technology",
    classes: [
      "ci ci-kubernetes",
      "ci ci-kubernetes-horizontal",
      "ci ci-kubernetes-vertical",
    ],
    url: "kubernetes.com",
  },
  {
    name: "Laravel",
    category: "technology",
    classes: ["ci ci-laravel"],
    url: "laravel.com",
  },
  {
    name: "Meta",
    category: "technology",
    classes: [
      "ci ci-meta",
      "ci ci-meta-horizontal",
      "ci ci-meta-horizontal-light",
    ],
    url: "meta.com",
  },
  {
    name: "Metamask",
    category: "technology",
    classes: [
      "ci ci-metamask",
      "ci ci-metamask-horizontal",
      "ci ci-metamask-vertical",
    ],
    url: "metamask.com",
  },
  {
    name: "Microsoft",
    category: "technology",
    classes: [
      "ci ci-microsoft",
      "ci ci-microsoft-horizontal",
      "ci ci-microsoft-horizontal-light",
    ],
    url: "microsoft.com",
  },
  {
    name: "Mixcloud",
    category: "art and music",
    classes: [
      "ci ci-mixcloud",
      "ci ci-mixcloud-light",
      "ci ci-mixcloud-wordmark",
      "ci ci-mixcloud-wordmark-light",
      "ci ci-mixcloud2",
      "ci ci-mixcloud2-wordmark",
      "ci ci-mixcloud3",
      "ci ci-mixcloud3-wordmark",
    ],
    url: "mixcloud.com",
  },
  {
    name: "MongoDB",
    category: "technology",
    classes: [
      "ci ci-mongodb",
      "ci ci-mongodb-horizontal",
      "ci ci-mongodb2",
      "ci ci-mongodb2-horizontal",
    ],
    url: "mongodb.com",
  },
  {
    name: "MUI",
    category: "technology",
    classes: ["ci ci-mui"],
    url: "mui.com",
  },
  {
    name: "MySQL",
    category: "technology",
    classes: ["ci ci-mysql", "ci ci-mysql-vertical"],
    url: "mysql.com",
  },
  {
    name: "Pfizer",
    category: "pharmaceuticals",
    classes: ["ci ci-pfizer", "ci ci-pfizer-wordmark"],
    url: "pfizer.com",
  },
  {
    name: "Netflix",
    category: "technology",
    classes: ["ci ci-netflix", "ci ci-netflix-wordmark"],
    url: "netflix.com",
  },
  {
    name: "Netlify",
    category: "technology",
    classes: [
      "ci ci-netlify",
      "ci ci-netlify-light",
      "ci ci-netlify-wordmark",
      "ci ci-netlify-wordmark-light",
    ],
    url: "netlify.com",
  },
  {
    name: "Nextjs",
    category: "technology",
    classes: [
      "ci ci-nextjs",
      "ci ci-nextjs-horizontal",
      "ci ci-nextjs-horizontal-light",
      "ci ci-nextjs-light",
    ],
    url: "nextjs.com",
  },
  {
    name: "Nodejs",
    category: "technology",
    classes: [
      "ci ci-nodejs",
      "ci ci-nodejs-horizontal",
      "ci ci-nodejs-horizontal-light",
      "ci ci-nodejs-vertical-dark",
      "ci ci-nodejs-vertical-light",
    ],
    url: "nodejs.com",
  },
  {
    name: "npm",
    category: "technology",
    classes: ["ci ci-npm", "ci ci-npm-wordmark"],
    url: "npm.com",
  },
  {
    name: "Nuxtjs",
    category: "technology",
    classes: [
      "ci ci-nuxtjs",
      "ci ci-nuxtjs-horizontal",
      "ci ci-nuxtjs-horizontal-light",
    ],
    url: "nuxtjs.com",
  },
  {
    name: "Pinia",
    category: "technology",
    classes: ["ci ci-pinia"],
    url: "pinia.com",
  },
  {
    name: "Pinterest",
    category: "art and music",
    classes: ["ci ci-pinterest", "ci ci-pinterest-horizontal"],
    url: "pinterest.com",
  },
  {
    name: "Pluto",
    category: "art and music",
    classes: ["ci ci-pluto"],
    url: "pluto.com",
  },
  {
    name: "Polygon",
    category: "technology",
    classes: [
      "ci ci-polygon-io",
      "ci ci-polygon-io-vertical",
      "ci ci-polygon-io-wordmark",
    ],
    url: "polygon.com",
  },
  {
    name: "Postgresql",
    category: "technology",
    classes: ["ci ci-postgresql"],
    url: "postgresql.com",
  },
  {
    name: "Python",
    category: "technology",
    classes: [
      "ci ci-python",
      "ci ci-python-horizontal",
      "ci ci-python-powered",
      "ci ci-python2-powered",
    ],
    url: "python.com",
  },
  {
    name: "Pytorch",
    category: "technology",
    classes: ["ci ci-pytorch", "ci ci-pytorch-horizontal"],
    url: "pytorch.com",
  },
  {
    name: "Railway",
    category: "technology",
    classes: [
      "ci ci-railway",
      "ci ci-railway-horizontal",
      "ci ci-railway-horizontal-light",
      "ci ci-railway-light",
    ],
    url: "railway.com",
  },
  {
    name: "React Native",
    category: "technology",
    classes: ["ci ci-react-native"],
    url: "reactnative.dev",
  },
  {
    name: "Reactjs",
    category: "technology",
    classes: ["ci ci-reactjs"],
    url: "react.dev",
  },

  {
    name: "Redis",
    category: "technology",
    classes: [
      "ci ci-redis",
      "ci ci-redis-enterprise",
      "ci ci-redis-horizontal",
      "ci ci-redis-horizontal-light",
    ],
    url: "redis.com",
  },
  {
    name: "Redux",
    category: "technology",
    classes: ["ci ci-redux"],
    url: "redux.com",
  },
  {
    name: "Sanity",
    category: "technology",
    classes: ["ci ci-sanity", "ci ci-sanity-wordmark"],
    url: "sanity.com",
  },
  {
    name: "Sass",
    category: "technology",
    classes: ["ci ci-sass", "ci ci-sass-wordmark"],
    url: "sass.com",
  },
  {
    name: "Solidity",
    category: "technology",
    classes: ["ci ci-solidity"],
    url: "solidity.com",
  },
  {
    name: "Soundcloud",
    category: "art and music",
    classes: ["ci ci-soundcloud", "ci ci-soundcloud-horizontal"],
    url: "soundcloud.com",
  },
  {
    name: "Spring",
    category: "technology",
    classes: ["ci ci-spring"],
    url: "spring.com",
  },
  {
    name: "Supabase",
    category: "technology",
    classes: [
      "ci ci-supabase",
      "ci ci-supabase-horizontal",
      "ci ci-supabase-horizontal-light",
    ],
    url: "supabase.com",
  },
  {
    name: "Svelte",
    category: "technology",
    classes: ["ci ci-svelte", "ci ci-svelte-horizontal"],
    url: "svelte.com",
  },
  {
    name: "Tailwind",
    category: "technology",
    classes: [
      "ci ci-tailwind",
      "ci ci-tailwind-horizontal",
      "ci ci-tailwind-horizontal-light",
    ],
    url: "tailwind.com",
  },
  {
    name: "Tmdb",
    category: "technology",
    classes: ["ci ci-tmdb"],
    url: "tmdb.com",
  },

  {
    name: "Twitter",
    category: "technology",
    classes: [
      "ci ci-twitter",
      "ci ci-twitter-circle",
      "ci ci-twitter-rounded-square",
      "ci ci-twitter-square",
    ],
    url: "twitter.com",
  },
  {
    name: "TypeScript",
    category: "technology",
    classes: ["ci ci-ts", "ci ci-ts-circle", "ci ci-ts-wordmark"],
    url: "typescriptlang.org",
  },
  {
    name: "Vercel",
    category: "technology",
    classes: [
      "ci ci-vercel",
      "ci ci-vercel-horizontal",
      "ci ci-vercel-horizontal-light",
      "ci ci-vercel-light",
    ],
    url: "vercel.com",
  },
  {
    name: "Vimeo",
    category: "technology",
    classes: ["ci ci-vimeo", "ci ci-vimeo-wordmark", "ci ci-vimeo2"],
    url: "vimeo.com",
  },
  {
    name: "Vuejs",
    category: "technology",
    classes: ["ci ci-vuejs"],
    url: "vuejs.com",
  },
  {
    name: "Web3Js",
    category: "technology",
    classes: ["ci ci-web3js"],
    url: "web3js.com",
  },
  {
    name: "Ciphense",
    category: "technology",
    classes: ["ci ci-ciphense"],
    url: "ciphense.com",
  },
  {
    name: "Ringcentral",
    category: "technology",
    classes: ["ci ci-ringcentral"],
    url: "ringcentral.com",
  },
  {
    name: "HighOnSwift",
    category: "technology",
    classes: ["ci ci-highonswift"],
    url: "highonswift.com",
  },
];
export default icons;

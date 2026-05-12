---
title: 'Intro'
description: 'Menulis Novel Menggunakan Astro'
pubDate: 'May 12 2026'
heroImage: '../../assets/alessandra.jpg'
---

Kita lanjutkan pembahasan mengenai penulisan novel dalam format `Markdown` atau `MDX` dengan menggunakan `Astro JS` sebagai `processor`.

Bukan seperti `Lume` yang kita bahas di dalam [dokumen lain](https://fictional-spoon.fxadilima.deno.net/documentations/lume/), sepintas lalu _layout_ yang terdapat di dalam `Astro` ini terasa membingungkan, tetapi kita sungguh-sungguh bisa langsung menulis di dalam direktori `content/blog` ini sepanjang contoh `Frontmatter` yang ada di bagian atas setiap dokumen itu kita mengerti atau kita contoh dengan sebaik-baiknya. Contoh konkret adalah dokumen ini sendiri, yang saya tulis dengan cara menghapus dan menggantikan teks _random_ yang diberikan `Astro` untuk mengisi situs baru.

Tanpa melakukan perubahan apa pun saya bisa langsung menampilkan tulisan ini sambil tetap menjalankan _development server_ di port 4321 seperti sebelumnya.

Karena situs ini sendiri saya buat dengan memilih _template_ **Blog**, langkah pertama maka yang paling mudah adalah menulis langsung di folder ini. Jika kita perhatikan, properties yang terdapat di awal dokumen ini adalah sebagai berikut:

```yaml
title: 'Intro'
description: 'Menulis Novel Menggunakan Astro'
pubDate: 'May 12 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
```

Karena contoh novel di dalam repository saya di [GitHub]() adalah mengenai kisah seorang anak perempuan bernama Alessandra, langkah pertama saya adalah mengganti image "blog-placeholder3.jpg" di atas dengan gambar yang lebih sesuai dengan tema cerita, yaitu gambar gadis kecil itu sendiri.

Selanjutnya kita telsuri bagaimana _layout_ halaman ini sendiri disusun. Jika kita perhatikan _outline_ atau struktur direktori yang dibuat oleh `Astro`, maka kita akan menemukan sebuah folder yang bernama "layouts", dan di situ (bagi kita yang memilih template Blog) hanya ada sebuah file yang bernama "BlogPost.astro", dengan isi utama seperti ini:

```html
<html lang="en">
	<head>
		<BaseHead title={title} description={description} />
		<style>
			main {
				width: calc(100% - 2em);
				max-width: 100%;
				margin: 0;
			}
			.hero-image {
				width: 100%;
			}
			.hero-image img {
				display: block;
				margin: 0 auto;
				border-radius: 12px;
				box-shadow: var(--box-shadow);
			}
			.prose {
				width: 720px;
				max-width: calc(100% - 2em);
				margin: auto;
				padding: 1em;
				color: rgb(var(--gray-dark));
			}
			.title {
				margin-bottom: 1em;
				padding: 1em 0;
				text-align: center;
				line-height: 1;
			}
			.title h1 {
				margin: 0 0 0.5em 0;
			}
			.date {
				margin-bottom: 0.5em;
				color: rgb(var(--gray));
			}
			.last-updated-on {
				font-style: italic;
			}
		</style>
	</head>

	<body>
		<Header />
		<main>
			<article>
				<div class="hero-image">
					{heroImage && <Image width={1020} height={510} src={heroImage} alt="" />}
				</div>
				<div class="prose">
					<div class="title">
						<div class="date">
							<FormattedDate date={pubDate} />
							{
								updatedDate && (
									<div class="last-updated-on">
										Last updated on <FormattedDate date={updatedDate} />
									</div>
								)
							}
						</div>
						<h1>{title}</h1>
						<hr />
					</div>
					<slot />
				</div>
			</article>
		</main>
		<Footer />
	</body>
</html>
```

Abaikan dulu semuanya, _kecuali_ tag `<BaseHead>` di atas, yang bisa kita temukan padanannya dalam beberapa `import` di bagian atas dokumen itu sendiri:

```js
import { Image } from 'astro:assets';
import type { CollectionEntry } from 'astro:content';
import BaseHead from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
import FormattedDate from '../components/FormattedDate.astro';
import Header from '../components/Header.astro';
```

Nah, sekarang kita buka file "../components/BaseHead.astro" yang dimaksud, dan kita akan melihat banyak hal yang sangat menarik di situ, tapi coba cari bagian ini:

```html
<!-- Global Metadata -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" href="/favicon.ico" />
<link rel="sitemap" href="/sitemap-index.xml" />
```

Ini adalah bagian `<head>` dari HTML yang nantinya akan dikirimkan ke _browser_ setelah semuanya jadi. Kita ingin memakai `W3.CSS` (atau CSS kita sendiri) untuk mendukung penulisan novel kita, karena itu saya menyelipkan sebuah `<link>` berikut:

```html
<link rel="stylesheet" href="https://w3schools.com/w3css/5/w3.css" />
```

Nah, di sini kita akan menguji apakah cara tersebut bisa digunakan.

<div class="w3-card-4 w3-round-large">
    <header class="w3-container w3-blue">
        <h3 class="w3-text-white"><strong>News</strong></h3>
    </header>
    <div class="w3-container">
    <p>Ini adalah bukti bahwa <code>w3-container</code> class bisa digunakan di dalam Astro!</p>
    </div>
</div>

Untuk menulis `Card` di atas, saya menggunakan `HTML` biasa di dalam dokumen `Markdown` ini. Karena ini adalah Markdown biasa (bukan MDX), maka kita tidak dapat menyelipkan `Markdown` di antara tag HTML yang belum ditutup.

```html
<div class="w3-card-4 w3-round">
    <header class="w3-container w3-blue">
        <h3 class="w3-text-white"><strong>News</strong></h3>
    </header>
    <div class="w3-container">
    <p>Ini adalah bukti bahwa <code>w3-container</code> class bisa digunakan di dalam Astro!</p>
    </div>
</div>
```


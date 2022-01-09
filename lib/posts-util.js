// helper folder własciwie
// paczka npm install gray-matter pozwala podzielić markdown na metadane i własciwy kontent
import fs from "fs";
import path from "path";
import matter from "gray-matter"; // do odzielenia na metadane i właściwy kontent

// process.cwd() to root w nextjs bo całos aplikacji uruchomionej traktuje jak z jednego folderu
const postsDirectory = path.join(process.cwd(), "posts");

//pobierania samej listy plików, n przydatne do getStaticPaths żeby wiedziec dla ilu plików wyrenderować strony podczas npm run build ALE NIE czytać wszsytlkich danych bo to overkill


export function getPostData(postIdentifier) { //nieasynchronicza bo synchornicze czytam pliki
  // pozbywamy się rozszerzenia, a jak go nie ma to nie problem 
  const postSlug = postIdentifier.replace(/\.md$/,''); //removes the file extension - nazwa pliku to własnie slug

  /*Czytanie pojedynczego pliku  zamiast fileName robię nazwe plikuz z roszczerzeniem ze slug, dizęki temu mozna wykorzystać w pobieraniu pojedynczego psota*/
  const filePath = path.join(postsDirectory, `${postSlug}.md`); //pełba basolutna ściezka do konkretnego pliku
  const fileContent = fs.readFileSync(filePath, "utf-8"); // string
  //metadane i kontent
  const { data, content } = matter(fileContent); //przyjmuje stringa zwraca obiekt z dwoma propertisami na metadane (data) i contnet (content)


  const postData = {
    // trzeba mieć dane rozdzielone na meta i kontent ale jeszcze SLUG
    slug: postSlug,
    ...data, //wszystkie metadane z ich kluczami
    content, // content:content to w skrócie zapis w obiekcie
  };

  return postData;
}

export function getAllPosts() { //nieasynchronicza bo synchornicze czytam pliki
  // czytam cały konktent z folderu synchronicznie - blokuję
  const postFiles = fs.readdirSync(postsDirectory); // lista Array nazw plików

  //   for (const postFile of postFiles){
  //       const postData = getPostData(postFile); //synchronicznie
  //   }
  //lepioej zmapować na listę nowych danych niż zwyk=ła pętlą
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  //   sortowanie najmłdoszy post na górze
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts() { //nieasynchronicza bo synchornicze czytam pliki
    // jak dużo plików (sto / tysiac) to mozna rozważyć jsona, który ma liste wszystkich feature posts żeby nie czytać wszystkich plików
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}

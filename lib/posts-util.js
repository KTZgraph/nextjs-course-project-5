// helper folder własciwie
// paczka npm install gray-matter pozwala podzielić markdown na metadane i własciwy kontent
import fs from "fs";
import path from "path";
import matter from "gray-matter"; // do odzielenia na metadane i właściwy kontent

// process.cwd() to root w nextjs bo całos aplikacji uruchomionej traktuje jak z jednego folderu
const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  /*Czytanie pojedynczego pliku */
  const filePath = path.join(postsDirectory, fileName); //pełba basolutna ściezka do konkretnego pliku
  const fileContent = fs.readFileSync(filePath, "utf-8"); // string
  //metadane i kontent
  const { data, content } = matter(fileContent); //przyjmuje stringa zwraca obiekt z dwoma propertisami na metadane (data) i contnet (content)

  const postSlug = fileName.replace("/.md$/", ""); //removes the file extension - nazwa pliku to własnie slug

  const postData = {
    // trzeba mieć dane rozdzielone na meta i kontent ale jeszcze SLUG
    slug: postSlug,
    ...data, //wszystkie metadane z ich kluczami
    content, // content:content to w skrócie zapis w obiekcie
  };

  return postData;
}

function getAllPosts() {
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
  allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

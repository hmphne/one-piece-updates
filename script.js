let latestChapeter;

async function latestChapter() {
  const res = await fetch("https://api.api-onepiece.com/chapters/count");
  const record = await res.json();
  // console.log(record);
  latestChapeter = record
  document.getElementById("chapter_num").innerHTML = record;

  const resp = await fetch(`https://api.api-onepiece.com/chapters/${latestChapeter}`);
  const records = await resp.json();
  console.log(records)
  document.getElementById("chapter_title").innerHTML = records.chapter_title;

}
latestChapter();

console.log(latestChapeter)

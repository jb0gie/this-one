<script>
    let src = 'avi.jpeg';
    let title = 'ｂ０ｇｉｅ';
    let subTitle = '𝐢 𝐫 𝐭𝐞𝐜𝐡🧞𝐬𝐡𝐚𝐦𝐚𝐧。消費者 𝐧𝐢𝐜𝐞𝐬𝐭𝟎𝐧𝐍𝐞𝐭';
    let b0gieNoun = '𝐛𝟎𝐠𝐢𝐞 𝙣𝙤𝙪𝙣 /ˈbəʊ.ɡi/ ';
    let b0gieNounDesc = 'something that causes fear in many people, often without reason.';
    let gitLenkTxt = 'oh look a 🐩ly maintained😷 github';
    let cordLenkTxt = 'oh look An🎙EntryPoint';
    let outro = "i r simple, minimalistic, and thinker. I like making stuff.";
</script>

<div class="relative px-4 py-5 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style="backdrop-filter: blur(20px);">
    <div class="max-w-md mx-auto">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3 ...">
                <img {src} alt={title} class="w-16 md:w-24"/>
            </div>
            <div class="col-span-2 ...">
                <h1>𝐢 𝐫 {title}</h1>
            </div>
            <div class="row-span-2 col-span-2 ...">
                <h2>{b0gieNoun}<br><code>{b0gieNounDesc}</code></h2>
            </div>
        </div>
        <div class="divide-y divide-gray-200">
            <div class="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h5>{outro}</h5>
            </div>
            <div class="pt-3 text-base leading-6 sm:text-lg sm:leading-7">
                <h5 class="text-center">{subTitle}</h5>
            </div>
        </div>
    </div>
</div>
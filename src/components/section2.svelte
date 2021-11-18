<script>
    export let cardHead = '';
</script>

<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200" style="backdrop-filter: blur(20px);">
    <div class="max-w-md mx-auto">
        <div>
        {cardHead}
        <!-- <img src="" class="h-7 sm:h-8" /> -->
        </div>
        <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>cardSubHead:</p>
                <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                        <span class="h-6 flex items-center sm:h-7">🎉</span>
                        <p class="ml-2">
                            normal txt den 
                            <code class="text-sm font-bold text-gray-900">txt with monoFX den</code> 
                            normal txt 
                        </p>
                    </li>
                </ul>
                <p>likkle bit of info round up woot </p>
            </div>
            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>lead onto next card</p>
                <p><a href="https://metagame.wtf" class="text-purple-600 hover:text-purple-700">follow d &rarr; 🐙</a></p>
            </div>
        </div>
    </div>
</div>
function writeHeader(splash) {
    document.write(`
        <header>
            <img src="https://pbs.twimg.com/media/GHYcS-ybUAAEYEo?format=jpg&amp;name=medium">
            
            <nav class="center">
                <a href="/">home</a>
                <a href="https://bsky.app/profile/oix-ai.art">bsky</a>
                <a href="https://github.com/Kazumafan/Oix">repo</a>
                <div style="flex: 1;"></div>
                <div style="font-size: smaller;">© 2024 Oix.</div>
            </nav>
            
            <div style="flex: 1;"></div>
            
            <div class="center">` + splash + `</div>
            
            <div style="flex: 1;"></div>
        </header>
    `);
}

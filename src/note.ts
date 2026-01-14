// Turbopack is a Rust-based bundler(translator) for Next.js that significantly improves development speed by rebuilding only changed files instead of the entire app.

// Webpack সব file আবার process করে, Turbopack শুধু যেটা বদলেছে সেটাই করে। joto rokomer file ace jmn js,ts,css,import,export shob kicu ke bundle kore browser ke supply kore.Because Browser এসব আলাদা আলাদা বুঝে না

// Server যেই HTML বানিয়েছে, browser (client)-এ React যখন সেটার উপর JavaScript চালিয়ে “hydrate” করতে যায়, তখন দুইটার output মিলছে না — এই mismatch-টাই hydration error।

// amra jokhon loading use kori normally development a loading kaj korlew production a loading ta dekhabe na ..karon npm run build dile static vabe data load hobe tay loading er proyojon nai but jodi amra run time a data fetch korte chay mane dynamic vabe tahole loading dekhanor jonno oboshoi brower ke dynamic bole dite hobe ..export const dynamic = "force-dynamic";
// NextJs a server ba client boath side rendering ei age thekei HTML structure ta ready kore fele.kintu REACT a client side rendering hoto mane React JavaScript দিয়ে HTML তৈরি করে এবং পরে interaction attach করে orthat ekta faka html return hoi prothome then interction

// "use-client" -Interaction লাগলে → use client...use client use korle NextJs bujhte pare eikhane kicu interction ace r er jonno joto gula bundle dorkar ba javascript dorkar tototuku javascript amader browser a download hoi.orthat jekhane user interactivityr proyojon ace sheikhane amra use-client use korbo.(useState, useEffect, useContext,onClick, onChange,window, document, localStorage,Theme toggle, modal, dropdown, form)

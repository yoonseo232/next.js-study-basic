// ...
import Link from "next/link"

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                {/* children의 바깥 영역에서 공통적으로 필요한 UI 요소 추가 가능 */}
                <header>Header</header>
                <menu>
                    <Link href="/second">to second</Link><br />
                    <Link href="/second/third">to third</Link><br />
                    {/* 외부 사이트의 경우 a 태그를 사용하여 링크 */}
                    <a href="http://www.google.com">to google</a>
                </menu>
        </body>
    </html>
  );
}

import { notFound } from 'next/navigation'

export default function Fourth() {
    const random = Math.random() < 0.5;
    console.log(random)
        
    if(random) {
        // notFound 함수 직접 호출하여 not-found.js 컴포넌트 내용 렌더링 가능
        // (단, 여기서는 글로벌 404 페이지를 사용하여 렌더링)
        notFound()
    }

    return <div>Fourth Page</div>
}

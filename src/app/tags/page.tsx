import { AddTag } from "./add-tag";
import { Tags } from "./tags";
import { Suspense } from "react";


export default function tags() {
    return (
        <div>
            <Suspense fallback={<p>Carregando tags...</p>}>
                <Tags />
            </Suspense>
            <AddTag />
        </div>
    )
}
/**
 * Implementing Dependencies Inversion Principle for fetch tool
 *
 * @author Angel Angeles <aangeles@litystyles.com>
 */
export const fetcher = async (input: RequestInfo | URL, init?: RequestInit | undefined): Promise<any> => {
    const res = await fetch(input, init)
    return await res.json()
}
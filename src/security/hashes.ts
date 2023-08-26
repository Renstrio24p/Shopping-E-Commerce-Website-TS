const GenerateHashes = new Set();

export default function UniqueHash() {
    let hash;
    do {
        hash = Math.random().toString(36).substring(2);
    } while (GenerateHashes.has(hash));
    GenerateHashes.add(hash);
    return hash;
}
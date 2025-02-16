export function InputBox({ label, placeholder, onChange }) {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1 text-left">{label}</label>
            <input 
                onChange={onChange} 
                placeholder={placeholder} 
                className="w-full px-4 py-2 border rounded-lg shadow-sm bg-gray-100 focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
}

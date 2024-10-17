import java.io.File

class fileLoader(private val path: String) {

    fun loadFile(): String {
        val file = File(this.path)
        val text = file.readText()
        return text
    }
}
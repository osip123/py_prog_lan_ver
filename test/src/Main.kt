
import java.io.File


fun main() {

    val parser = MParser()

    val Ttoks:List<MToken> = parser.parse("6 + 4")

    val arg1 = Ttoks[0].buffer.toInt()
    val arg2 = Ttoks[2].buffer.toInt()


    val PlusNode = PlusNode(arg1, arg2)

    println(PlusNode.evaluate())

}


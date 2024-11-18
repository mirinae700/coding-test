import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        boolean bool = true;
        while (bool) {
            int a = scan.nextInt();
            int b = scan.nextInt();
            if (a + b != 0) System.out.println(a + b);
            else bool = false;
        }
    }
}
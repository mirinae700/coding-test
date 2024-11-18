import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        long a = 0, b = 0, c = 0;
        Scanner scan = new Scanner(System.in);

        while (!(validate(a) && validate(b) && validate(c))) {
            try {
                a = scan.nextLong();
                b = scan.nextLong();
                c = scan.nextLong();
            } catch (Exception e) {}
        }
        System.out.println(a + b + c);
    }

    public static boolean validate(long number) {
        return number >= 1 && number <= Math.pow(10, 12);
    }
}